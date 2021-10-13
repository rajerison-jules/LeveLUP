import React from "react";
import "./cardStyle.css";
export default function Card(props) {
  return (
    <div className="card p-3 border-0 m-3">
      <div className="d-flex justify-content-center w-100 ">
        <div className="image--card" style={{ background: props.bg }}>
          <img className="card-img-top" src={props.image} alt="Card" />
        </div>
      </div>

      <div className="text-center p-3 pt-3">
        <h6 className="card--title">{props.title}</h6>
        <p className="text-secondary small">
          Insurance can have various effects on society through the way that it
          changes who bears the cost of losses and damage.
        </p>
      </div>
    </div>
  );
}
