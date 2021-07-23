import React from "react";
import { useCountry } from "../Contexts/CountryContext";

const FilterTigger = (props) => {
  const { filterDataByRegion, setInp } = useCountry();

  const clickHandler = (e) => {
    e.stopPropagation();
    setInp("");
    filterDataByRegion(props.value);
    props.toggle(false);
    props.setTitle(props.value);
  };

  return <p onClick={clickHandler}>{props.value}</p>;
};

export default FilterTigger;
