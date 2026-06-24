import type { WeatherResponse } from "../types/weather";


interface Props {
  weather: WeatherResponse;
}

function WeatherCard({
  weather,
}: Props) {
  return (
    <div className="text-center mt-8">
      <img
        className="mx-auto w-32"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
      />

      <h2 className="text-3xl font-bold">
        {weather.name}
      </h2>

      <h1 className="text-6xl font-bold mt-3">
        {Math.round(
          weather.main.temp
        )}
        °
      </h1>

      <p className="text-gray-500 mt-2">
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-3 gap-3 mt-8">
        <div className="bg-sky-50 dark:bg-slate-700 p-4 rounded-xl">
          <p>Humidity</p>
          <h3>
            {weather.main.humidity}%
          </h3>
        </div>

        <div className="bg-sky-50 dark:bg-slate-700 p-4 rounded-xl">
          <p>Wind</p>
          <h3>
            {weather.wind.speed}
          </h3>
        </div>

        <div className="bg-sky-50 dark:bg-slate-700 p-4 rounded-xl">
          <p>Feels</p>
          <h3>
            {Math.round(
              weather.main.feels_like
            )}
            °
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;