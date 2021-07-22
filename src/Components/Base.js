import React from "react";

import "../Css/Base.css";
import CardContainer from "./CardContainer";
import Filter from "./Filter";
import Input from "./Input";

const Base = () => {
  return (
    <div className="base">
      <div className="base-inp">
        <Input />
        <Filter />
      </div>
      <div className="base-filter"></div>
      <CardContainer />
    </div>
  );
};

export default Base;
