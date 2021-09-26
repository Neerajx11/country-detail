import React from "react";
import { useCountry } from "../Contexts/CountryContext";

import "../Css/Card.css";

const Card = (props) => {
  let { name, capital, region, population, flags } = props.data;
  let { setModalData, setShowModal } = useCountry();

  const clickHandler = () => {
    setModalData(props.data);
    setShowModal((prev) => !prev);
  };

  return (
    <div className="card" onClick={clickHandler}>
      <div className="card-img">
        <img src={flags[0]} alt="" />
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
