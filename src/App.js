import React from "react";
import { Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import "inter-ui/inter.css";
import "./App.css";
import Name from "./Components/Name";
import Question1 from "./Components/Questions/Question1";
import Question2 from "./Components/Questions/Question2";
import Question3 from "./Components/Questions/Question3";
import Result from "./Components/Questions/Result";

export default function App() {
  return (
    <Row className="basis__container">
      <Row className="basis">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
          <Routes>
            <Route path="/question1" element={<Question1 />} />
          </Routes>
          <Routes>
            <Route path="/question2" element={<Question2 />} />
          </Routes>
          <Routes>
            <Route path="/question3" element={<Question3 />} />
          </Routes>
          <Routes>
            <Route path="/name" element={<Name />} />
          </Routes>
          <Routes>
            <Route path="/Result" element={<Result />} />
          </Routes>
        </Router>
      </Row>
    </Row>
  );
}
