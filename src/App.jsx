import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import { useState } from "react";

const App = () => {
  const APIKEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.openweathermap.org/data/2.5";

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);
    const urlWeather = `${BASE_URL}/weather?q=${city}&appid=${APIKEY}&units=metric`;
    const urlForecast = `${BASE_URL}/forecast?q=${city}&appid=${APIKEY}&units=metric`;
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(urlWeather),
        fetch(urlForecast),
      ]);
      if (!weatherResponse.ok) {
        throw new Error("Weather of city not found");
      }
      if (!forecastResponse.ok) {
        throw new Error("forecast of city not found");
      }
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);
    } catch (error) {
      setError(error.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="container mx-auto max-w-3xl">
        <h1>Weather App</h1>
        <SearchForm onSearch={handleSearch} />
        {isLoading && <p className="mt-4">Loading...</p>}
        {error && (
          <p className="mt-4 text-red-300">There was an error: {error}</p>
        )}
        {weather && <WeatherCard weather={weather} />}
        {forecast && (
          <h3 className="text-xl font-semibold my-8 uppercase ">
            5 day Forecast
          </h3>
        )}
        <div className="grid grid-cols-3 gap-4">
          {forecast && <ForecastCard forecast={forecast} />}
        </div>
      </div>
    </div>
  );
};

export default App;
