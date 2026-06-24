import { useEffect, useState } from "react";
import Search from "./components/Search";

import ThemeButton from "./components/ThemeButton";
import {
  getForecast,
  getWeather,
  getWeatherByCoords,
} from "./services/weatherService";
import { type ForecastItem, type WeatherResponse } from "./types/weather";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

document.documentElement.classList.add("dark");


function App() {
  const [city, setCity] =
    useState("");


  const [weather, setWeather] =
    useState<WeatherResponse | null>(
      null
    );

  const [forecast, setForecast] =
    useState<ForecastItem[]>([]);

  const [history, setHistory] =
    useState<string[]>(
      JSON.parse(
        localStorage.getItem(
          "history"
        ) || "[]"
      )
    );

  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem(
        "theme"
      ) === "dark"
    );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
      localStorage.setItem(
        "theme",
        "light"
      );
    }
  }, [darkMode]);

  const handleSearch =
    async () => {
      if (!city) return;

      try {
        const weatherData =
          await getWeather(city);

        const forecastData =
          await getForecast(city);

        setWeather(weatherData);

        setForecast(
          forecastData.list.filter(
            (
              _: unknown,
              index: number
            ) => index % 8 === 0
          )
        );

        const newHistory = [
          city,
          ...history.filter(
            (item) =>
              item !== city
          ),
        ].slice(0, 5);

        setHistory(newHistory);

        localStorage.setItem(
          "history",
          JSON.stringify(
            newHistory
          )
        );
      } catch {
        alert(
          "Şəhər tapılmadı"
        );
      }
    };

  const handleLocation =
    () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const data =
            await getWeatherByCoords(
              position.coords
                .latitude,
              position.coords
                .longitude
            );

          setWeather(data);
        }
      );
    };

  return (
    <div
      className="
      min-h-screen
      bg-sky-100
      dark:bg-slate-900
      duration-300
      flex
      justify-center
      items-center
      p-5
    "
    >
      <ThemeButton
        dark={darkMode}
        toggle={() =>
          setDarkMode(
            !darkMode
          )
        }
      />

      <div
        className="
        w-full
        max-w-xl
        bg-white
        dark:bg-slate-800
        rounded-3xl
        shadow-xl
        p-8
        text-slate-900
        dark:text-white
      "
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          Weather App
        </h1>

        <Search
          city={city}
          setCity={setCity}
          onSearch={
            handleSearch
          }
          onLocation={
            handleLocation
          }
        />

        <div className="flex gap-2 flex-wrap mt-4">
          {history.map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  setCity(item)
                }
                className="
                  bg-gray-200
                  dark:bg-slate-700
                  px-3
                  py-1
                  rounded-full
                "
              >
                {item}
              </button>
            )
          )}
        </div>

        {weather && (
          <WeatherCard
            weather={
              weather
            }
          />
        )}

        {forecast.length >
          0 && (
          <Forecast
            forecast={
              forecast
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;