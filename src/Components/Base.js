import React, { useEffect } from "react";
import { useCountry } from "../Contexts/CountryContext";

import "../Css/Base.css";
import CardContainer from "./CardContainer";
import Filter from "./Filter";
import Input from "./Input";
import Modal from "./Modal";

const Base = () => {
  let { showModal } = useCountry();

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="base">
      <div className="base-inp">
        <Input />
        <Filter />
      </div>
      <div className="base-filter"></div>
      <CardContainer />
      {showModal && <Modal />}
    </div>
  );
};

export default Base;
