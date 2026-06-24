import axios from "axios";
import type { WeatherResponse } from "../types/weather";


const API_KEY = "d32bd17e782e54a0729a829c462c76ac";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getWeather = async (
  city: string
): Promise<WeatherResponse> => {
  const res = await api.get(
    `/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return res.data;
};

export const getForecast = async (city: string) => {
  const res = await api.get(
    `/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  return res.data;
};

export const getWeatherByCoords = async (
  lat: number,
  lon: number
) => {
  const res = await api.get(
    `/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return res.data;
};