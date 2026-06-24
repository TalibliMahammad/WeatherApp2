import type { ForecastItem } from "../types/weather";


interface Props {
  forecast: ForecastItem[];
}

function Forecast({
  forecast,
}: Props) {
  return (
    <div className="grid grid-cols-5 gap-2 mt-8">
      {forecast.map((item) => (
        <div
          key={item.dt}
          className="
            bg-sky-50
            dark:bg-slate-700
            p-3
            rounded-xl
            text-center
          "
        >
          <p>
            {new Date(
              item.dt_txt
            ).toLocaleDateString(
              "en-US",
              {
                weekday: "short",
              }
            )}
          </p>

          <img
            className="mx-auto"
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          />

          <p>
            {Math.round(
              item.main.temp
            )}
            °
          </p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;