import React, { useEffect } from "react";
import { useCountry } from "../Contexts/CountryContext";
import Base from "./Base";
import Loader from "./Loader";
import Navbar from "./Navbar";

import "../Css/Home.css";

const Home = () => {
  let { loading, theme, toggleTheme } = useCountry();

  const setThemeFromLocal = () => {
    if (localStorage.getItem("theme") === "dark") toggleTheme();
  };

  useEffect(() => {
    setThemeFromLocal();
  }, []);

  return (
    <div className="home" data-theme={theme}>
      {loading && <Loader />}
      <Navbar />
      <Base />
    </div>
  );
};

export default Home;
