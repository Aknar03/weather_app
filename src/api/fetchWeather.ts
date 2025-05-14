import { API_KEY, BASE_URL } from './constants';

export const fetchWeather = async (city: string) => {
  const res = await fetch(`${BASE_URL}current.json?key=${API_KEY}&q=${city}&aqi=no`);
  if (!res.ok) throw new Error('Ошибка загрузки погоды');
  return res.json();
};

