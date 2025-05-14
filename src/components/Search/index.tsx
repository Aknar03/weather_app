import { useState } from "react";
import { useCitySuggestions } from "../../hooks/useCitySuggestions";
import { Star } from "lucide-react";

type SearchProps = {
  setCity: (city: string) => void;
  currentCity: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
};

export const Search = ({ 
  setCity, 
  currentCity, 
  isFavorite, 
  toggleFavorite 
}: SearchProps) => {
  const [inputValue, setInputValue] = useState('');

  const { data: suggestions = [] } = useCitySuggestions(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (name: string) => {
    setCity(name);
    setInputValue('');
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      <div className="relative">
        <input
          className="focus:outline-3 focus:outline-sky-300 bg-gray-500 opacity-50 rounded-md pl-2 py-0.5 placeholder-amber-50"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Введите город"
        />
        {inputValue && suggestions.length > 0 && (
          <ul className="absolute bg-white dark:bg-gray-800 mt-1 rounded shadow-md z-50 w-full">
            {suggestions.map((s: any) => (
              <li key={s.id}>
                <button
                  onClick={() => handleSuggestionClick(s.name)}
                  className="block w-full text-left dark:hover:bg-gray-700 hover:bg-gray-100 px-2 py-1"
                >
                  {s.name}, {s.country}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {currentCity && (
        <button
          onClick={toggleFavorite}
          className="p-1.5 rounded-full hover:bg-gray-500 hover:opacity-30 transition"
          title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        >
          <Star 
            size={20} 
            className={isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
          />
        </button>
      )}
    </div>
  );
};