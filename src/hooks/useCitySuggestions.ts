// hooks/useCitySuggestions.ts
import { useQuery } from '@tanstack/react-query';
import { fetchCitySuggestions } from '../api/fetchCities';

export const useCitySuggestions = (query: string) => {
  return useQuery({
    queryKey: ['citySuggestions', query],
    queryFn: () => fetchCitySuggestions(query),
    enabled: !!query, // Запрос выполняется только если query не пустой
    staleTime: 1000 * 60,
  });
};
