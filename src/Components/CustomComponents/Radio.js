import React from "react";
import { Circle, CheckCircle } from "phosphor-react";
import "../Styles/radio.css";

export default function Radio({ name, checked, setChecked }) {
  const check = () => {
    setChecked(name);
  };
  return (
    <div className="radio">
      {checked === name ? (
        <CheckCircle
          className="radioCheck"
          weight="fill"
          size={32}
          onClick={check}
        />
      ) : (
        <Circle className="radioCircle" size={32} onClick={check} />
      )}
      <span className="radioLabel">{name}</span>
    </div>
  );
}
