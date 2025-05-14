import SidebarItem from "./SidebarItem";

type SidebarProps = {
  isOpen: boolean;
  favorites: string[];
  setCity: (city: string) => void;
};

const Sidebar = ({ isOpen, favorites, setCity }: SidebarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-sky-500 dark:bg-gray-900 shadow-md p-4 z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Избранные города</h2>

      <ul>
        {favorites.length === 0 ? (
          <p className="text-sm text-gray-700">Нет избранных городов</p>
        ) : (
          favorites.map((favCity) => (
            <SidebarItem 
              key={favCity} 
              city={favCity} 
              onClick={() => setCity(favCity)}
            />
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;