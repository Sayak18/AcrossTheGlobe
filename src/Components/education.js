import React from "react";
import cp from "../images/dp2.png";
import dp from "../images/sarah.png";
const Education = () => {
  return (
    <div className="art-contain">
      <h1>Education</h1>
      <img src={cp} className="meet-img" alt="display picture" />
      <div className="caption">
        Tax Benefits for Investment under National Pension Scheme launched by
        Government
      </div>
      <p>
        I’ve worked in UX for the better part of a decade. From now on, I plan
        to rei…
      </p>
      <div className="author">
        <span>
          <img src={dp} />
          Sarah West
        </span>
      </div>
    </div>
  );
};
export default Education;
