import { FaMoon, FaSun } from 'react-icons/fa';

interface NavBarProps {
  toggleThemeHandler: () => void;
  theme: string;
}

export default function NavBar({ toggleThemeHandler, theme }: NavBarProps) {
  return (
    <div
      className={`container flex justify-between items-center shadow-md p-4 min-w-full fixed top-0 text-black bg-white dark:bg-control-dark dark:text-white z-10`}
    >
      <h1 className={`font-bold ml-10 w-full dark:bg-control-dark`}>
        Where in the world?
      </h1>
      <button
        className="bg-blue-800 dark:bg-yellow-500 mr-10 p-4 rounded-md hover:bg-blue-900 duration-500 hover:scale-[1.05]"
        onClick={toggleThemeHandler}
      >
        {theme === 'light' ? (
          <FaMoon className="text-white" />
        ) : (
          <FaSun className="text-white" />
        )}
      </button>
    </div>
  );
}
