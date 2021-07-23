import React, { useEffect } from "react";
import { useCountry } from "../Contexts/CountryContext";
import Base from "./Base";
import Loader from "./Loader";
import Navbar from "./Navbar";

import "../Css/Home.css";
import Modal from "./Modal";

const Home = () => {
  let { loading, theme, toggleTheme, showModal } = useCountry();

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
      {showModal ? <Modal /> : <Base />}
    </div>
  );
};

export default Home;
