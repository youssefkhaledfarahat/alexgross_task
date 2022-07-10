import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/result.css";

export default function Result() {
  const location = useLocation();
  console.log(location.state);
  const question1 = {
    Often: 5,
    Rarely: 3,
    Never: 0,
  };
  const result =
    question1[location.state.radio] +
      location.state.checkBox.length * 2 +
      parseInt(location.state.country) || 0;
  return (
    <div className="result">
      <div className="result__title">Result</div>
      <div className="result__score__title">
        Your Score:
        <br />
        <div className="result__name">{location.state.name}</div>
      </div>
      <div className="result__points__name">
        {result} <br /> <span className="points">Points</span>
      </div>
      <div className="w3-border">
        <div
          className="w3-grey"
          style={{ width: `${(result / 16) * 100}%` }}
        ></div>
      </div>
      <Link to="/name">
        <div className="next__container">
          <button className="next button">Start New</button>
        </div>
      </Link>
    </div>
  );
}
