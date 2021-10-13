import React, { useContext } from "react";
import "./NavbarStyle.css";

import "animate.css";
import { FirebaseContext } from "../../Firebase";

export default function Banner() {
  const data = useContext(FirebaseContext);

  const dd = data
    ? {
        banner: data[25],
        img2: data[13],
        img4: data[31],
        img3: data[12],
        img5: data[6],
        img6: data[7],
        img7: data[5],
      }
    : [];

  return (
    <div className="banner--style">
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-center  w-75 align-items-center position-relative content2">
          <div className="bg-blur3">
            <img className="im1" alt="img7" src={dd.img7} />
          </div>
          <div className="text--ban position-absolute ">
            <div className="titre animate__animated animate__backInDown">
              {" "}
              Stay Strong, Live long.{" "}
            </div>
            <div className="titre2  animate__animated animate__backInLeft">
              {" "}
              <span className="titre2s"> Take care </span> of your body and it
              will take care of <span className="titre2s"> you </span>.
            </div>
            <div className="titre3 animate__animated animate__backInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit
              feugiat viverra est suspendisse porta tortor commodo, tellus.
              Neque,
            </div>
            <div className="mt-5 ">
              {" "}
              <button className="btn btn-primary btn--style2">
                Get Appointment
              </button>
              <button className=" btn btn-primary btn--style3">
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className="position relative content3 w-100 ">
          <div className="imag3 animate__animated  animate__slower	5s animate__infinite	infinite">
            <img className="im2" src={dd.img2} alt="img2" />
          </div>
          <div className="imag2 animate__animated animate__slower	5s animate__infinite	infinite">
            <img className="im2" src={dd.img3} alt="img3" />
          </div>
          <div className="imag1">
            <img className="im1" src={dd.img4} alt="img4" />
          </div>
          <div className="">
            <img className="imag" src={dd.banner} alt="img4Z" />
          </div>
          <div className="bg-blur">
            <img className="im1" src={dd.img5} alt="imgZ4" />
          </div>
          <div className="bg-blur2">
            <img className="im1" src={dd.img6} alt="img4zz" />
          </div>
        </div>
      </div>
    </div>
  );
}
