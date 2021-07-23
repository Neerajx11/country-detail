import React from "react";

import "../Css/Card.css";

const Card = (props) => {
  let { name, capital, region, population, flag } = props.data;

  return (
    <div className="card">
      <div className="card-img">
        <img src={flag} alt="" />
      </div>
      <div className="card-body">
        <p className="card-body__title">{name}</p>
        <p className="card-body__list">
          <span className="card-body__sub">Population : </span>
          {population.toLocaleString("en-US")}
        </p>
        <p className="card-body__list">
          <span className="card-body__sub">Region : </span>
          {region}
        </p>
        <p className="card-body__list">
          <span className="card-body__sub">Capital : </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
