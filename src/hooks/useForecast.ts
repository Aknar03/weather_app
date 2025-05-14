// src/hooks/useForecast.ts
import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "../api/fetchForecast";
import type { ForecastData } from "../types/weather";

export const useForecast = (city: string) => {
  return useQuery<ForecastData>({
    queryKey: ["forecast", city],
    queryFn: () => fetchForecast(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
  });
};