import React, { useContext } from "react";
import { FirebaseContext } from "../Firebase";

export default function Section4() {
  const data = useContext(FirebaseContext);

  const dd = data
    ? {
        quote: data[17],
        BG: data[27],
        SP: data[32],
        quotes: data[18],
        user1: data[35],
        user2: data[36],
        user3: data[37],
        user4: data[38],
        user5: data[39],
        Fleche: data[42],
      }
    : [];
  return (
    <div id="temoin" className="sec4 step--component">
      <div className="w-100 text-center mb-5">
        <span className="h3  titre4">
          Let’s see what <span className="titre4s">patient</span> says!
        </span>
      </div>

      <div
        className=" d-flex justify-content-between w-100 bg-coeur position-relative "
        style={{ backgroundImage: `url(${dd.BG})` }}
      >
        <div className="w-100 cont">
          <div className="position-absolute sp m-2">
            <img src={dd.SP} alt="logsso" />
          </div>
          <div className="main position-relative">
            <div className="cirlce1 animate__rubberBand animate__animated">
              <img src={dd.user1} alt="test" />
            </div>
            <div className="cirlce2 animate__rubberBand animate__animated">
              <img src={dd.user2} alt="tfest" />
            </div>
            <div className="cirlce3 animate__rubberBand animate__animated">
              <img src={dd.user3} alt="tssest" />
            </div>
            <div className="cirlce4 animate__rubberBand animate__animated">
              <img src={dd.user4} alt="tessst" />
            </div>
            <div className="cirlce5 animate__rubberBand animate__animated">
              <img src={dd.user5} alt="testsss" />
            </div>
            <div className="cirlcef animate__animated  animate__slower	5s animate__infinite	infinite">
              <img src={dd.Fleche} alt="ftest" />
            </div>
          </div>
        </div>
        <div className="w-100 d-flex" style={{ verticalAlign: "bottom" }}>
          <div className="imageq">
            <img className="m-4 mb-0" src={dd.quote} alt="" />{" "}
          </div>

          <div>
            <div className=" w-100">
              <h6>
                <i>
                  Blandit feugiat viverra est tortor commodo, tellus.
                  pellentesque diam, id felis viverra diam. Molestie solli
                  semper ornare dolor augue aucto.{" "}
                  <img
                    className="m-4 mt-0"
                    style={{ verticalAlign: "top" }}
                    src={dd.quotes}
                    alt=""
                  />
                </i>
              </h6>
            </div>
            <div className=" w-100">
              <h4>Justin Lubin</h4>
              <div>Patient</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
