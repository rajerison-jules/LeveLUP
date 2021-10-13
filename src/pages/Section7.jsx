import React, { useContext } from "react";
import { FirebaseContext } from "../Firebase";
import { FaCalendar, FaGreaterThan } from "react-icons/fa";

export default function Section7() {
  const data = useContext(FirebaseContext);

  const dd = data
    ? {
        EL: data[8],
        BG: data[21],
        SP: data[22],
        DT: data[23],
        DG: data[24],
        BL: data[1],
        BLS: data[2],
      }
    : [];
  return (
    <div id="faq-1" className=" sec7 w-100">
      <div className="w-100 text-center mb-5">
        <span className="h3  titre4">
          Let’s see Our <span className="titre4s">latest </span> news!
        </span>
      </div>

      <div className="far">
        <div className="  loh">
          <div className="w-100">
            <img className="w-100" src={dd.BG} alt="qssddd" />
          </div>
          <div className="m-5">
            <div className="d-flex justify-content-between">
              <span className="d-flex justify-content-center align-items-center ">
                {" "}
                <img src={dd.EL} alt="qsdfsdsddd" /> By Maria Calzoni
              </span>
              <span className="d-flex justify-content-center align-items-center ">
                {" "}
                <FaCalendar className="m-3" /> 21/07/2021
              </span>
            </div>
            <div>
              <h1 className="titla">
                Join me and respectfully fight COVID misinformation.
              </h1>
              <p>
                Blandit feugiat viverra est tortor commodo, tellus. Neque,
                pellentesque diam, id felis viverra diam. Molestie sollicitudin
                semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit
                amet.
              </p>
              <p>
                Blandit feugiat viverra est tortor commodo, tellus. Neque,
                pellentesque diam, id felis viverra diam. Molestie sollicitudin
                semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
        </div>

        <div className="  abn  ">
          <div className="h4"> Latest News:</div>

          <div className="linkk mb-4">
            <div className="d-flex align-items-start w-100">
              <div className="  h-100">
                <img src={dd.SP} alt="qfsdsdd" />
              </div>

              <div className="  d-flex flex-column justify-content-between h-100 tena ">
                <span className="h4 soratra">
                  {" "}
                  I’m called anti-science I’m just an early...
                </span>
                <span className="text-danger">
                  {" "}
                  Read More <FaGreaterThan />
                </span>
              </div>
            </div>
          </div>
          <div className="linkk mb-4">
            <div className="d-flex align-items-start w-100">
              <div className="  h-100">
                <img src={dd.DT} alt="qsljldd" />
              </div>

              <div className="  d-flex flex-column justify-content-between h-100 tena ">
                <span className="h4 soratra">
                  {" "}
                  Burnout and bias? Or medical...
                </span>
                <span className="text-danger">
                  {" "}
                  Read More <FaGreaterThan />
                </span>
              </div>
            </div>
          </div>
          <div className="linkk mb-4">
            <div className="d-flex align-items-start w-100">
              <div className="  h-100">
                <img src={dd.DG} alt="qsdmpd" />
              </div>

              <div className="  d-flex flex-column justify-content-between h-100 tena ">
                <span className="h4 soratra">
                  {" "}
                  Healthy Living With Graves’ Disease.
                </span>
                <span className="text-danger">
                  {" "}
                  Read More <FaGreaterThan />
                </span>
              </div>
            </div>
          </div>
          <div className="h4"> Coming soon:</div>
          <div className="drako w-100">
            {" "}
            <img className="m-2" src={dd.BL} alt="qsmpdd" />{" "}
            <img className="m-2" src={dd.BLS} alt="qsdomd" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
