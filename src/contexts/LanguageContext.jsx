import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import data from "../mocks/data.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Sistem dilini al (navigator.language veya navigator.languages)
  const systemLanguage = navigator.language || navigator.languages[0];
  const defaultLanguage = systemLanguage.startsWith("tr") ? "tr" : "en"; // Eğer sistem dili "tr" ise "tr", değilse "en" olarak ayarla

  // useLocalStorage ile dil değerini kaydet, ancak başlangıçta sistem dilini kontrol et
  const [language, setLanguage] = useLocalStorage("language", defaultLanguage);
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://reqres.in/api/osmansofu",
        data
      );
      if (response.data[language]) {
        setApiData(response.data[language]);
      } else {
        throw new Error(`Dil verisi bulunamadı: ${language}`);
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "Veri çekilirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <LanguageContext.Provider value={{ apiData, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
