import React from "react";
import "./cardStyle.css";
import icon from "./../../assets/img/tick.png";
export default function Price(props) {
  return (
    <div className=" card p-3 border-0 m-3">
      <div className="d-flex justify-content-center w-100 p-5">
        <h6 className="card--title" style={{ color: props.bg }}>
          {props.title}
        </h6>
      </div>
      <div className="d-flex justify-content-center w-100 ">
        <div
          className="step--card text-center d-flex align-items-center justify-content-center"
          style={{ background: props.bg }}
        >
          <span className="mb-4 dollar">$</span>{" "}
          <span className="chifre">{props.niveau}</span>
        </div>
      </div>

      <div className=" p-3 pt-3">
        <ul className="list-group text-center w-100">
          <li className="list-group-item border-0 d-flex align-items-center w-100   cursor-pointer">
            <span>
              <img width="30" src={icon} alt="icon" />
            </span>
            <span className="m-1 text-secondary small paragraph">
              Rapidiously strategize value
            </span>
          </li>
          <li className="list-group-item border-0 d-flex align-items-center w-100   cursor-pointer">
            <span>
              <img width="30" src={icon} alt="icon" />
            </span>
            <span className="m-1 text-secondary small paragraph">
              Rapidiously strategize value
            </span>
          </li>
          <li className="list-group-item border-0 d-flex align-items-center w-100   cursor-pointer">
            <span>
              <img width="30" src={icon} alt="icon" />
            </span>
            <span className="m-1 text-secondary small paragraph">
              Rapidiously strategize value
            </span>
          </li>
        </ul>
      </div>
      <div className="text-center p-3 pt-3">
        <span className="btn " style={{ background: props.bg, color: "#FFF" }}>
          {" "}
          Choose Plan
        </span>
      </div>
    </div>
  );
}
