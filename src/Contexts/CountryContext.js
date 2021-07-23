import React, { useContext, useEffect, useState } from "react";
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
      setCountryData(() => arr);
    } else {
      setCountryData(defData);
    }
  };

  const filterDataByRegion = (txt) => {
    txt = txt.toLowerCase();

    if (txt !== "all") {
      let arr = defData.filter(({ region }) => {
        region = region.toLowerCase();
        return region === txt;
      });
      setCountryData(() => arr);
    } else {
      setCountryData(defData);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") toggleTheme();
  }, []);

  // ============= SHOW MODAL ===================
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");

  // ============= INPUT ================
  const [inp, setInp] = useState("");

  const value = {
    loading,
    theme,
    toggleTheme,

    // Data
    countryData,
    getAllData,
    filterDataByInp,
    filterDataByRegion,

    // Modal
    showModal,
    setShowModal,
    modalData,
    setModalData,
    defData,

    // Input
    inp,
    setInp,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
