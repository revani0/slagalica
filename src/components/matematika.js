import React from "react";
import "./components-css/matematika.css";
import { useState } from "react";

function Matematika({ toggle }) {
  const [hideSlova, sethideSlova] = useState(true);
  return (
    <>
      {toggle ? (
        <>
          <div className="slova-main">
            <div className="matm-trazeni">
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                9
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                1
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                4
              </div>
            </div>
            <div className="slova-wrap">
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                3
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                1
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                6
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                7
              </div>
              <div
                className={`slovo matm-desetina ${
                  hideSlova ? "slovo-hidden" : ""
                }`}
              >
                20
              </div>
              <div
                className={`slovo slovo-last matm-stotina ${
                  hideSlova ? "slovo-hidden" : ""
                }`}
              >
                50
              </div>
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
        </>
      ) : (
        <>
          <div className="slova-main">
            <div className="matm-trazeni">
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                2
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                9
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                6
              </div>
            </div>
            <div className="slova-wrap">
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                8
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                1
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                9
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                3
              </div>
              <div
                className={`slovo matm-desetina ${
                  hideSlova ? "slovo-hidden" : ""
                }`}
              >
                15
              </div>
              <div
                className={`slovo slovo-last matm-stotina ${
                  hideSlova ? "slovo-hidden" : ""
                }`}
              >
                50
              </div>
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
        </>
      )}
    </>
  );
}

export default Matematika;
