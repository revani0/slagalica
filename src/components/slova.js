import React from "react";
import "./components-css/slova.css";
import { useState } from "react";

function Slova({ toggle }) {
  const [hideSlova, sethideSlova] = useState(true);
  return (
    <>
      {toggle ? (
        <>
          <div className="slova-main">
            <div className="slova-wrap">
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                I
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                O
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                S
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                I
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                J
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                K
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                O
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                T
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                E
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                B
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                P
              </div>
              <div
                className={`slovo slovo-last ${
                  hideSlova ? "slovo-hidden" : ""
                }`}
              >
                O
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
            <div className="slova-wrap">
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                O
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                T
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                E
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                K
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                I
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                S
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                E
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                T
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                V
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                L
              </div>
              <div className={`slovo ${hideSlova ? "slovo-hidden" : ""}`}>
                N
              </div>
              <div
                className={`slovo slovo-last ${
                  hideSlova ? "slovo-hidden" : ""
                }`}
              >
                S
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

export default Slova;
