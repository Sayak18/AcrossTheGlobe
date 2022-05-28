import React from "react";
import cp from "../images/dp1.png";
import dp from "../images/sarthak.png";
const Article = () => {
  return (
    <div className="art-contain">
      <h1>Article</h1>
      <img src={cp} className="meet-img" alt="display picture" />
      <div className="caption">
        What if famous brands had regular fonts?Meet RegulaBrands!
      </div>
      <p>
        I've worked in UX for the better part of a decade. From now on, I plan
        to rei…
      </p>
      <div className="author">
        <span>
          <img src={dp} /> Sarthak Kamra
        </span>
      </div>
    </div>
  );
};
export default Article;
