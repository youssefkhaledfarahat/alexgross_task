import { useRef, useState } from "react";
import { ArrowCircleRight } from "phosphor-react";
import { ArrowLeft } from "phosphor-react";
import "./Styles/name.css";
import { Link, useLocation } from "react-router-dom";

export default function Name() {
  const location = useLocation();
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  return (
    <div className="name">
      <div className="nameTitle">Who are you?</div>
      <div className="namePrompt">Please Enter Your Name</div>
      <div className="nameInput__container">
        <div className="form__group">
          <input
            className="form__field"
            placeholder="John Doe"
            ref={nameRef}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <label
            onClick={() => nameRef.current?.focus()}
            for="email"
            className="form__label"
          >
            Your Name
          </label>
        </div>
      </div>
      <Link to="/Question1" state={{ name }}>
        <div className="next__container">
          <button disabled={name ? name.length === 0 : true} className="next">
            Next <ArrowCircleRight className="next__icon" size={20} />
          </button>
        </div>
      </Link>
      <Link to="/">
        <div className="back__container">
          <button className="back">
            <ArrowLeft size={12} className="back__icon" /> Back
          </button>
        </div>
      </Link>
    </div>
  );
}
