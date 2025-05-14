type SidebarItemProps = {
  city: string;
  onClick: () => void;
};

const SidebarItem = ({ city, onClick }: SidebarItemProps) => {
  return (
    <li className="mb-2">
      <button
        onClick={onClick}
        className="w-full text-left p-2 rounded dark:hover:bg-gray-700 hover:bg-sky-400 transition-colors"
      >
        {city}
      </button>
    </li>
  );
};

export default SidebarItem;