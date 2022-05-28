import React from "react";
import dp from "../images/joseph.png";
const Job = () => {
  return (
    <div className="jobcontainer">
      <h1>Job</h1>
      <div className="caption">Software Dveloper</div>
      <div className="jobdetails">
        <span className="role">Innovaccer Analytics Private Ltd.</span>
        <span className="job-location">Noida, India</span>
      </div>
      <div className="author">
        <span>
          <img src={dp} />
          Joseph Gray
        </span>
      </div>
    </div>
  );
};
export default Job;
