import React from "react";

import "../Css/Card.css";

const Card = () => {
  let ctrData = {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
  };
  return (
    <div className="card">
      <div className="card-img">
        <img src={ctrData.flag} alt="" />
      </div>
      <div className="card-body">
        <p className="card-body__title">{ctrData.name}</p>
        <p className="card-body__list">
          <span className="card-body__sub">Population : </span>
          {ctrData.population.toLocaleString("en-US")}
        </p>
        <p className="card-body__list">
          <span className="card-body__sub">Region : </span>
          {ctrData.region}
        </p>
        <p className="card-body__list">
          <span className="card-body__sub">Capital : </span>
          {ctrData.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
