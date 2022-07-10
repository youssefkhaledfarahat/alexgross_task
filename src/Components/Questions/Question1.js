import React, { useState } from "react";
import { ArrowCircleRight } from "phosphor-react";
import { ArrowLeft } from "phosphor-react";
import "../Styles/question1.css";
import { Link, useLocation } from "react-router-dom";
import Radio from "../CustomComponents/Radio";
import Form from "react-bootstrap/Form";

export default function Question1() {
  const location = useLocation();
  const [checked, setChecked] = useState(location.state.radio);
  const check = (name) => {
    setChecked(name);
  };
  return (
    <>
      <div className="surveyName">Survey For: {location.state.name}</div>
      <div className="q1">
        <div className="q1Title">Question 1</div>
        <div className="q1Prompt">How often do you visit this website?</div>
        <div className="mcq__container">
          <Form className="form-wrapper">
            <Radio name="Often" checked={checked} setChecked={check} />
            <Radio name="Rarely" checked={checked} setChecked={check} />
            <Radio name="Never" checked={checked} setChecked={check} />
          </Form>
        </div>
        <Link
          to="/Question2"
          state={{ name: location.state.name, radio: checked }}
        >
          <div className="next__container">
            <button
              disabled={checked ? checked.length === 0 : true}
              className="next"
            >
              Next <ArrowCircleRight className="next__icon" size={20} />
            </button>
          </div>
        </Link>
        <Link to="/Name" state={location.state}>
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
