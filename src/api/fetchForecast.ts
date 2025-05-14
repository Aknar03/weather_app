import { API_KEY, BASE_URL } from './constants';

export const fetchForecast = async (city: string) => {
  const res = await fetch(`${BASE_URL}forecast.json?key=${API_KEY}&q=${city}&days=14`);
  if (!res.ok) throw new Error('Ошибка загрузки прогноза');
  return res.json();
};
