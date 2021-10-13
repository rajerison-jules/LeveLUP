import React from "react";
import "./cardStyle.css";

export default function Step(props) {
  return (
    <div
      className={`border-0   col-lg-3 col-md-6 col-sm-12 col-xs-12 ${props.anim}`}
    >
      <div style={{ background: `${props.bg + "29"}`, borderRadius: "20px" }}>
        <div className="d-flex justify-content-center flex-column align-items-center w-100 card--special m-2">
          <div
            className="step--card text-center d-flex align-items-center justify-content-center"
            style={{ background: props.bg }}
          >
            <span className="chifre">
              {" "}
              <img
                className="image-chiffre"
                src={props.niveau}
                alt="icon"
              />{" "}
            </span>
          </div>

          <div className="text-center  pt-3">
            <h6 className="card--title">{props.title}</h6>
            <p className=" text-normal2">
              feugiat viverra est suspendis porta tortor commodo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
