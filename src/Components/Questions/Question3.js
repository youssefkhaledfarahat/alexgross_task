import { ArrowCircleRight } from "phosphor-react";
import { ArrowLeft } from "phosphor-react";
import "../Styles/question3.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

export default function Question3() {
  const location = useLocation();
  const [country, setCountry] = useState(location.state.country || "");
  return (
    <>
      <div className="surveyName">Survey For: {location.state.name}</div>
      <div className="q1">
        <div className="q1Title">Question 3</div>
        <div className="q1Prompt">Where are you from?</div>
        <div className="mcq__container">
          <div className="form-wrapper">
            <select
              className="q1__dropdown"
              aria-label="Default select example"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              value={country}
            >
              <option value="" disabled selected>
                Please choose your country?
              </option>
              <option value="3">Germany</option>
              <option value="5">Sweden</option>
              <option value="5">Italy</option>
              <option value="3">Spain</option>
            </select>
          </div>
        </div>
        <Link
          to="/Result"
          state={{
            name: location.state.name,
            radio: location.state.radio,
            checkBox: location.state.checkBox,
            country,
          }}
        >
          <div className="next__container">
            <button
              disabled={country ? country.length === 0 : true}
              className="next"
            >
              Next <ArrowCircleRight className="next__icon" size={20} />
            </button>
          </div>
        </Link>
        <Link
          to="/Question2"
          state={{
            name: location.state.name,
            radio: location.state.radio,
            checkBox: location.state.checkBox,
          }}
        >
          <div className="back__container">
            <button className="back">
              <ArrowLeft size={12} className="back__icon" /> Back
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
