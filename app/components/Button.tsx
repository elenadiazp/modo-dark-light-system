import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-button-bg-light dark:bg-button-bg-dark text-white dark:text-body-bg-dark rounded-lg flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-12 h-5" />
         
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-12 h-5" />
         
        </>
      ) : (
        <>
          <Monitor className="w-12 h-5" />
          
        </>
      )}
    </button>
  );
}