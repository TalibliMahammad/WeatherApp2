export interface WeatherResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}