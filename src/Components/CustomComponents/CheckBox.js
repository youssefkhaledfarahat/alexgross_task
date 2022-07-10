import React from "react";
import { Square, CheckSquare } from "phosphor-react";
import "../Styles/radio.css";

export default function CheckBox({ name, checked, setChecked }) {
  const check = () => {
    setChecked(name);
  };
  return (
    <div className="radio">
      {checked?.includes(name) ? (
        <CheckSquare
          className="radioCheck"
          weight="fill"
          size={32}
          onClick={check}
        />
      ) : (
        <Square className="radioCircle" size={32} onClick={check} />
      )}
      <span className="radioLabel">{name}</span>
    </div>
  );
}
