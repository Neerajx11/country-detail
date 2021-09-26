import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const CountryContext = React.createContext();

export function useCountry() {
  return useContext(CountryContext);
}

export const CountryProvider = ({ children }) => {
  // ============ LOCAL STORAGE ===========
  const setThemeToLocal = (thm) => {
    setTheme(thm);
    localStorage.setItem("theme", thm);
  };

  // ============ LOADING =================
  const [loading, setLoading] = useState(false);

  // ============= THEME ================
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }
    getAllData();
  }, []);

  const toggleTheme = () =>
    theme === "light" ? setThemeToLocal("dark") : setThemeToLocal("light");

  // ============ GETTING DATA ==========
  const BASE_URL = "https://restcountries.com/v2";

  //Stores default data
  const [defData, setDefData] = useState(null);

  //Stores filtered Data
  const [countryData, setCountryData] = useState(null);

  const getAllData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/all`);
      setDefData(res.data);
      setCountryData(res.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const filterDataByInp = (txt) => {
    txt = txt.toLowerCase();

    if (txt) {
      let arr = defData.filter(({ name }) => {
        name = name.toLowerCase();
        return name.includes(txt);
      });
      setCountryData(arr);
    } else {
      setCountryData(defData);
    }
  };

  const filterDataByRegion = (txt) => {
    if (txt !== "All") {
      let arr = defData.filter(({ region }) => region.includes(txt));
      setCountryData(() => arr);
    } else {
      setCountryData(defData);
    }
  };

  // ============= SHOW MODAL ===================
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const value = {
    loading,
    theme,
    toggleTheme,

    // Data
    countryData,
    getAllData,
    setCountryData,
    filterDataByInp,
    filterDataByRegion,

    // Modal
    showModal,
    setShowModal,
    modalData,
    setModalData,
    defData,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};
