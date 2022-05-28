import React from "react";
import Article from "../Components/article";
import Education from "../Components/education";
import Event from "../Components/event";
import Job from "../Components/job";
import "../styles/al.css";
const All = () => {
  return (
    <div className="all">
      <Article />
      <Education />
      <Event />
      <Job />
    </div>
  );
};
export default All;
