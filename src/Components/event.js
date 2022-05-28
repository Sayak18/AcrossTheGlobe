import React from "react";
import cp from "../images/dp3.png";
import dp from "../images/Ronal.png";
const Event = () => {
  return (
    <div className="art-contain">
      <h1>Meetup</h1>
      <img src={cp} className="meet-img" alt="display picture" />
      <div className="caption">
        Finance & Investment Elite Social Mixer @Lujiazui
      </div>
      <div className="evendetails">
        <span className="date">Fri, 12 Oct, 2018</span>
        <span className="loacation">Ahmedabad, India</span>
      </div>
      <button className="btn-vi">Visit Website</button>
      <div className="author">
        <span>
          <img src={dp} />
          Ronal Jones
        </span>
      </div>
    </div>
  );
};
export default Event;
