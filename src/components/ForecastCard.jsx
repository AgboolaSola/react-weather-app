const ForecastCard = ({ forecast }) => {
  const forecastList = forecast.list;
  const dailyForecastList = forecastList.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  const dailyForecast = dailyForecastList.map((item, index) => {
    return (
      <div key={index}>
        <p className="mb-4 text-gray-500 font-bold">
          {new Date(item.dt_txt).toLocaleDateString("en-NG", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </p>
        <div className="p-4 border border-slate-500 rounded-md flex flex-col gap-1">
          <p>
            Temp:{" "}
            <span className="text-gray-300">
              {" "}
              {Math.round(item?.main.temp)}°C
            </span>
          </p>
          <p>
            Wind Speed:{" "}
            <span className="text-gray-300">{item?.wind?.speed}</span>
          </p>
          <p>
            Desc:{" "}
            <span className="text-gray-300">
              {item?.weather[0]?.description}
            </span>
          </p>
        </div>
      </div>
    );
  });
  console.log(dailyForecastList);
  return <>{dailyForecast}</>;
};

export default ForecastCard;
