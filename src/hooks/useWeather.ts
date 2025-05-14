// src/hooks/useWeather.ts
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/fetchWeather";
import type { WeatherData } from "../types/weather";

export const useWeather = (city: string) => {
  return useQuery<WeatherData>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
  });
};