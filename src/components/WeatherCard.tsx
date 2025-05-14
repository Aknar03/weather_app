// src/components/WeatherCard.tsx
import { useWeather } from '../hooks/useWeather';
import { useForecast } from '../hooks/useForecast';
import type { ForecastDay } from '../types/weather';

type WeatherCardProps = React.HTMLAttributes<HTMLDivElement> & {
  city: string;
};

export const WeatherCard = ({ city }: WeatherCardProps) => {
  const { 
    data: weatherData, 
    isLoading: isWeatherLoading, 
    isError: isWeatherError,
    error: weatherError 
  } = useWeather(city);

  const { 
    data: forecastData, 
    isLoading: isForecastLoading, 
    isError: isForecastError,
    error: forecastError 
  } = useForecast(city);

  const isLoading = isWeatherLoading || isForecastLoading;
  const isError = isWeatherError || isForecastError;

  if (isLoading) return;
  
  if (isError) {
    const errorMessage = [
      weatherError?.message,
      forecastError?.message
    ].filter(Boolean).join('; ');
    
    return <p>Ошибка загрузки данных: {errorMessage || 'Неизвестная ошибка'}</p>;
  }

  if (!weatherData || !forecastData) return <p>Данные не найдены</p>;

  return (
    <div className='fixed top-16 left-0 right-0 p-4'>
      {/* Текущая погода */}
      <div className='mb-6'>
        <h2 className='text-3xl font-bold'>{weatherData.location.name}</h2>
        <p className='text-6xl font-extralight my-2'>
          {Math.round(weatherData.current.temp_c)}°
        </p>
        <p className='font-medium opacity-75'>
          Ощущается как: {Math.round(weatherData.current.feelslike_c)}°
        </p>
        <p className='text-xl mt-2'>{weatherData.current.condition.text}</p>
        {weatherData.current.condition.icon && (
          <img 
            src={weatherData.current.condition.icon} 
            alt={weatherData.current.condition.text}
            className='w-16 h-16 m-auto'
          />
        )}
      </div>

      {/* Прогноз на следующие дни */}
      <div className='mt-6 bg-white/10 p-4 rounded-lg'>
        <h3 className='text-xl font-semibold mb-2'>Прогноз на 14 дней:</h3>
        <div className='flex overflow-x-auto gap-4 pb-2'>
          {forecastData.forecast.forecastday.map((day: ForecastDay) => (
            <div 
              key={day.date} 
              className='bg-white/10 p-3 rounded-lg min-w-[80px] flex flex-col items-center'
            >
              <p className='font-medium'>
                {new Date(day.date).toLocaleDateString('ru', { weekday: 'short' })}
              </p>
              <p className='text-2xl my-1'>{Math.round(day.day.avgtemp_c)}°</p>
              {day.day.condition.icon && (
                <img 
                  src={`https:${day.day.condition.icon}`} 
                  alt={day.day.condition.text}
                  className='w-8 h-8'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};