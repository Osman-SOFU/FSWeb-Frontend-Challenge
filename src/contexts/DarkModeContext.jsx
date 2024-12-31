import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // Sistem temasını kontrol et
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // useLocalStorage ile darkMode değeri, ama başlangıçta sistem temasına göre ayarla
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefersDarkMode);

  // Sistem temasındaki değişiklikleri dinlemek için useEffect
  useEffect(() => {
    const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (event) => {
      setDarkMode(event.matches);
    };

    themeMediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      themeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [setDarkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
