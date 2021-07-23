import React, { useEffect } from "react";
import Card from "./Card";

import "../Css/CardContainer.css";
import { useCountry } from "../Contexts/CountryContext";

const CardContainer = () => {
  const { countryData, getAllData } = useCountry();

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {countryData ? (
        <div className="cardCtr">
          {countryData.map((el) => (
            <Card data={el} key={el.alpha2Code} />
          ))}
        </div>
      ) : (
        <div className="cardCtr">
          <p className="cardCtr-load">Loading...</p>
        </div>
      )}
    </>
  );
};

export default CardContainer;
