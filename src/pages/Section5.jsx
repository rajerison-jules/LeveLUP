import React, { useContext } from "react";
import { FirebaseContext } from "../Firebase";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Section5() {
  const data = useContext(FirebaseContext);

  const dd = data
    ? {
        BG: data[45],
        ST: data[44],
        SP: data[26],
        VC: data[41],
      }
    : [];
  const percentage = 66;
  return (
    <div className=" sec5 d-flex align-items-center">
      <div className="  entrer align-items-start w-100 ">
        <div className=" p-5 pt-0 dis ">
          <div className=" minicard d-flex ">
            <div className="w-100">
              {" "}
              <h6 className="miniT">Dr. Kierra Calzoni</h6>
              <p className="miniTt">
                Lorem ipsum dolor sit amet conct adipiscing elit. Sed tpus donec
                ultricies molestie vel.
              </p>
              <span>
                {" "}
                <img src={dd.VC} alt="vc" /> +88 01924 184 461
              </span>
            </div>
            <div className="w-50">
              <div>
                Rate: <img src={dd.BG} alt="vscc" />
                <img src={dd.BG} alt="vcs" />
                <img src={dd.BG} alt="vcss" />
                <img src={dd.ST} alt="vcsss" />
              </div>
              <div style={{ width: 90, height: 90 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",

                    // Text size
                    textSize: "16px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: "#000",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
                ;
              </div>
            </div>
          </div>
          <div className="">
            <img className="ima" src={dd.SP} alt="vsc" />
          </div>
        </div>
        <div className=" mab">
          <div>
            <div className=" w-100">
              <h2 className="text-uppercase">About Me</h2>
              <h1 className="me">I'm Dr. Kierra Calzoni.</h1>
            </div>
            <div className=" w-100">
              <span className="h3  titre4">
                Actually, I love to care{" "}
                <span className="titre4s">Patient.</span>
              </span>
              <div className="mt-5 pt-5">
                <p>
                  Blandit feugiat viverra est{" "}
                  <strong>
                    {" "}
                    <u>Suspendisse porta</u>{" "}
                  </strong>{" "}
                  tortor commodo.
                </p>
                <p>
                  <strong>
                    <u>Tempor proin</u>
                  </strong>{" "}
                  id aliquet lacinia vulputate non. Rhoncus, blandit feugiat
                  viverra est suspendisse porta tortor commodo, tellus. Neque.
                </p>
              </div>
            </div>
            <button className="btn btn-primary btn--style">Let’s Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
}
