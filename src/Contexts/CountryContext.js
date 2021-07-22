import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const CountryContext = React.createContext();

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }) {
  // ============ LOCAL STORAGE ===========
  const setThemeToLocal = (thm) => {
    setTheme(thm);
    localStorage.setItem("theme", thm);
  };
  // ============ LOADING =================
  const [loading, setLoading] = useState(false);

  // ============= THEME ================
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setThemeToLocal("dark") : setThemeToLocal("light");

  // ============ GETTING DATA ==========
  const BASE_URL = "https://restcountries.eu/rest/v2";
  const [countryData, setCountryData] = useState(null);
  const getAllData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/all`);
      setCountryData(res.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const value = {
    loading,
    theme,
    toggleTheme,

    // Data
    countryData,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
