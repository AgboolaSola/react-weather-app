const WeatherCard = ({ weather }) => {
  return (
    <>
      <div className=" mt-10 rounded-lg p-5 mb-1.5 border border-slate-600 bg-gray-800">
        <h2 className=" text-2xl font-medium mb-1">
          City Name: {weather.name}
        </h2>
        <p className="mb-4 text-gray-400 capitalize">
          {weather.weather[0].description}
        </p>
        <div className="flex gap-10 justify-between items-center">
          <div className="flex-col flex-1 gap-6 justify-center items-center text-center px-8 py-6 border-slate-500 bg-gray-900 rounded-lg ">
            <p>Temp</p> <p>{Math.round(weather.main.temp)}°C</p>
          </div>
          <div className="flex-col flex-1 gap-6 justify-center items-center text-center px-8 py-6 border-slate-500 bg-gray-900 rounded-lg ">
            <p>Humidity </p> <p> {weather.main.humidity}</p>
          </div>
          <div className="flex-col flex-1 gap-6 justify-center items-center text-center px-8 py-6 border-slate-500 bg-gray-900 rounded-lg ">
            <p>Wind speed </p> <p>{weather.wind?.speed}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
