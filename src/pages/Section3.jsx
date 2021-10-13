import React, { useContext } from "react";
import Card from "./../component/card/Step";

import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FirebaseContext } from "../Firebase";
export default function Section3() {
  const data = useContext(FirebaseContext);

  const dd = data
    ? {
        img1: data[14],
        img2: data[16],
        img3: data[15],
        img4: data[19],
      }
    : [];

  return (
    <div className=" sec3 step--component m-5 mb-0 pl-5">
      <AnimatedOnScroll animationIn="bounceInLeft">
        <div className="w-100 text-center mb-5">
          <span className="h3  titre4">
            My Skill <span className="titre4s">depends</span> on work.
          </span>
          <br />
          <p className="m-5 text-normal2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit
            feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,
          </p>
        </div>
      </AnimatedOnScroll>
      <div className=" row  list-card">
        <Card
          anim={"titre animate__animated animate__backInLeft"}
          bg="#F25A3C"
          title="Patient safety"
          niveau={dd.img1}
        />
        <Card
          anim={"titre animate__animated animate__backInDown"}
          bg="#CC7926"
          title="Well Cared"
          niveau={dd.img2}
        />
        <Card
          anim={"titre animate__animated animate__backInDown"}
          bg="#739D1E"
          title="24/7 Service"
          niveau={dd.img3}
        />
        <Card
          anim={"titre animate__animated animate__backInRight"}
          bg="#20BBA1"
          title="Online support"
          niveau={dd.img4}
        />
      </div>
    </div>
  );
}
