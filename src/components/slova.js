import React from "react";
import "./components-css/slova.css";
import { useState } from "react";

function Slova({ letters }) {
  const [hideSlova, sethideSlova] = useState(true);
  return (
    <div className="slova-main">
      <div className="slova-wrap">
        {letters.map((e) => (
          <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>{e}</div>
        ))}
      </div>
      <div
        className="btn btn-slova-stop"
        onClick={() => {
          sethideSlova(!hideSlova);
        }}
      >
        Stop
      </div>
    </div>
  );
}

export default Slova;
