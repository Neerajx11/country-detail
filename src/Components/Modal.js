import React from "react";

import "../Css/Modal.css";
import "../Css/Card.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-nav">
        <div className="modal-nav__img">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
            ></path>
          </svg>
          <p>Back</p>
        </div>
      </div>
      <div className="modal-body">
        <div className="modal-left">
          <img src="https://restcountries.eu/data/afg.svg" alt="flag" />
        </div>
        <div className="modal-right">
          <div className="modal-title">Belgium</div>
          <div className="modal-r__body">
            <div className="modal-r-body-l">
              <p className="card-body__list">
                <span className="card-body__sub">Native Name : </span>
                Capital
              </p>
              <p className="card-body__list">
                <span className="card-body__sub">Population : </span>
                Capital
              </p>
              <p className="card-body__list">
                <span className="card-body__sub">Region : </span>
                Capital
              </p>
              <p className="card-body__list">
                <span className="card-body__sub">Sub Region : </span>
                Capital
              </p>
              <p className="card-body__list">
                <span className="card-body__sub">Capital : </span>
                Capital
              </p>
            </div>
            <div className="modal-r-body-r">
              <p className="card-body__list">
                <span className="card-body__sub">Top Level Domain : </span>
                Capital
              </p>
              <p className="card-body__list">
                <span className="card-body__sub">Currencies : </span>
                Capital
              </p>
              <p className="card-body__list">
                <span className="card-body__sub">Languages : </span>
                Capital
              </p>
            </div>
          </div>
          <div className="modal-r__body-btm">
            <div>
              <span className="card-body__sub">Border Countries : </span>
            </div>
            <div className="modal-r__body-bdrlst">
              <span className="modal-nav__img card-body__sub-box">France</span>
              <span className="modal-nav__img card-body__sub-box">France</span>
              <span className="modal-nav__img card-body__sub-box">France</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
