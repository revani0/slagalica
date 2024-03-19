import React from "react";
import "./components-css/matematika.css";
import { useState } from "react";

function Matematika({ numbers }) {
  const [hideSlova, sethideSlova] = useState(true);
  return (
    <>
      <div className="matematika-main">
        <div className="matm-trazeni">
          {numbers[0].map((e) => (
            <div className={`broj ${hideSlova ? "broj-hidden" : ""}`}>{e}</div>
          ))}
        </div>
        <div className="brojevi-wrap">
          {numbers[1].map((e) => (
            <div className={`broj ponudjeni ${hideSlova ? "broj-hidden" : ""}`}>
              {e}
            </div>
          ))}
        </div>
        <div
          className="btn btn-broj-stop"
          onClick={() => {
            sethideSlova(!hideSlova);
          }}
        >
          Stop
        </div>
      </div>
    </>
  );
}

export default Matematika;
