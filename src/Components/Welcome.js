import React from "react";
import { ArrowCircleRight } from "phosphor-react";
import "./Styles/welcome.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className="welcomeTitle">Welcome to our Survey</div>
      <div className="welcomeText">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </div>
      <Link to="/Name">
        <div>
          <button className="startSurvey">
            Start The Survey
            <ArrowCircleRight size={20} style={{ marginLeft: "1.09vw" }} />
          </button>
        </div>
      </Link>
    </>
  );
}
