import { ArrowCircleRight } from "phosphor-react";
import { ArrowLeft } from "phosphor-react";
import "../Styles/question2.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

import CheckBox from "../CustomComponents/CheckBox";
import Form from "react-bootstrap/Form";

export default function Question2() {
  const [checked, setChecked] = useState([]);
  const check = (name) => {
    if (checked.includes(name)) {
      checked.splice(checked.indexOf(name), 1);
      setChecked([...checked]);
    } else setChecked([...checked, name]);
  };
  const location = useLocation();

  return (
    <>
      <div className="surveyName">Survey For: {location.state.name}</div>
      <div className="q1">
        <div className="q1Title">Question 2</div>
        <div className="q1Prompt">Please select at least one option</div>
        <div className="mcq__container">
          <Form className="form-wrapper">
            <CheckBox name="Often" checked={checked} setChecked={check} />
            <CheckBox name="Rarely" checked={checked} setChecked={check} />
            <CheckBox name="Never" checked={checked} setChecked={check} />
          </Form>
        </div>
        <Link
          to="/Question3"
          state={{
            name: location.state.name,
            radio: location.state.radio,
            checkBox: checked,
          }}
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
        <Link
          to="/Question1"
          state={{ name: location.state.name, radio: location.state.radio }}
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
