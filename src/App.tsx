import { PanelsTopLeft } from 'lucide-react';
import { useState } from 'react';
import './App.css';
import { Search } from './components/Search';
import Sidebar from './components/Sidebar';
import { WeatherCard } from './components/WeatherCard';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState('астана');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = () => {
    if (favorites.includes(city)) {
      setFavorites(favorites.filter(fav => fav !== city));
    } else {
      setFavorites([...favorites, city]);
    }
  };

  return (
    <div className="relative p-4">
      {/* Кнопка открытия сайдбара */}
      <button
        onClick={() => setIsOpen((a) => !a)}
        className="fixed top-4 left-4 z-50 rounded hover:rounded p-0.5 hover:bg-neutral-300 hover:opacity-50 transition duration-100 ease-in-out delay-100"
      >
        <PanelsTopLeft size={26} className="text-gray-400" />
      </button>

      {/* Поле ввода с кнопкой избранного */}
      <Search 
        setCity={setCity} 
        currentCity={city}
        isFavorite={favorites.includes(city)}
        toggleFavorite={toggleFavorite}
      />

      {/* Сайдбар */}
      <Sidebar 
        isOpen={isOpen} 
        favorites={favorites} 
        setCity={setCity} 
      />

      {/* Карточка погоды */}
      {city && <WeatherCard city={city} />}
    </div>
  );
}

export default App;