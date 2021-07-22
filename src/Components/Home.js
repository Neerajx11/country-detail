import React from "react";
import { useCountry } from "../Contexts/CountryContext";
import Base from "./Base";
import Loader from "./Loader";
import Navbar from "./Navbar";

import "../Css/Home.css";

const Home = () => {
  let { loading, theme } = useCountry();

  return (
    <div className="home" data-theme={theme}>
      {loading && <Loader />}
      <Navbar />
      <Base />
    </div>
  );
};

export default Home;
