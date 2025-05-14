// src/types/weather.ts
export interface WeatherCondition {
  text: string;
  icon: string;
}

export interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: WeatherCondition;
  };
}

export interface ForecastData {
  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface LocationData {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface CurrentWeather {
  temp_c: number;
  feelslike_c: number;
  condition: WeatherCondition;
  wind_kph: number;
  wind_dir: string;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  vis_km: number;
  uv: number;
  gust_kph: number;
}

export interface WeatherData {
  location: LocationData;
  current: CurrentWeather;
}