import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/multipage--bg.png";
import "./StarPoint.css"

const Resume_review = () => {
  return (
    <div>
      <div className="multi-pages"  >
        <div className=" sub--multipages">
          <div className="mutlipage-left">
            <div className="mutlipage-left-sub">
              <h1>Over 340</h1>
              <h1> Real-Life Resume </h1>
              <h1>Templates</h1>
              <p className="point-desc">
                Choose from free and premium templates and easily customize them
                without any issues.
              </p>
              <button className="btn">
                {/* <Link className="rout-link">Create Your Resume</Link> */}
              </button>
            </div>
          </div>
          <div className="mutlipage-right">
            <img className="multi-img" alt="" src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume_review;
