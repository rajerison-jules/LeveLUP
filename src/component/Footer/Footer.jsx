import React, { useContext } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { FirebaseContext } from "../../Firebase";
export default function Footer() {
  const data = useContext(FirebaseContext);

  const dd = data
    ? {
        image: data[0],
        image2: data[10],
        image4: data[28],
        image3: data[9],
        image5: data[30],
        image6: data[34],
      }
    : [];

  return (
    <div
      className="bg-light p-5 bg--footer"
      style={{ backgroundImage: `url(${dd.image})` }}
    >
      <div className="margin--perso2 row d-flex justify-content-around">
        <div className="col-md-4 p-5 pt-0">
          <div className="titre--perso">
            <img src={dd.image2} alt="image2" />
          </div>
          <div className="  text--footer">
            10 New Town Street, V2 5NW, Newstate, USA.
          </div>
          <span className="text--footer small">
            <FaPhoneAlt /> &nbsp; +88(019)24-184 461
          </span>
          <br />
          <span className="text--footer small">
            <FaEnvelope /> &nbsp; shovasatkhira@gmail.com
          </span>
          <br />
          <div className="text--footer">
            <img src={dd.image3} alt="image3" />

            <img src={dd.image4} alt="image4" className="m-2" />
            <img src={dd.image5} alt="image5" />
            <img src={dd.image6} alt="image6" className="m-2" />
          </div>
        </div>
        <div className=" col-md-2">
          <h4 className="text-white mb-4 ">Menu</h4>
          <span className="  text--footer">Work</span>
          <br />
          <span className="  text--footer">About</span>
          <br />
          <span className="  text--footer">Schedule</span>
          <br />
          <span className="  text--footer">Blog</span>
        </div>
        <div className="col-md-3">
          <h4 className="text-white mb-4 ">Useful link</h4>
          <span className="  text--footer">Privecy Policy</span>
          <br />
          <span className="  text--footer">Cookie Policy</span>
          <br />
          <span className="  text--footer">Purchasing Policy</span>
          <br />
          <span className="  text--footer">Terms & Conditions</span>
          <br />
          <span className="  text--footer">Career</span>
        </div>
        <div className="col-md-3">
          <h4 className="text-white mb-4 ">Contact</h4>
          <span className="  text--footer">
            Blandit feugiat viverra est tortor{" "}
          </span>
          <br />
          <span className="  text--footer">
            commodo, tellus. Neque, pellentesque diam, id felis viverra diam.
            Molestie sollicitudin semper ornare dolor augue{" "}
          </span>
          <br />
        </div>
        <div className="  col-md-11">
          <span className="  text--footer">
            &copy; Copyright 2021 The LOGO All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
