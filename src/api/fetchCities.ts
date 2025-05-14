import { API_KEY, BASE_URL } from "./constants";


// api/searchCities.ts
export const fetchCitySuggestions = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}search.json?key=${API_KEY}&q=${query}`
  );
  if (!response.ok) throw new Error('Ошибка при получении подсказок');
  return response.json();
};
