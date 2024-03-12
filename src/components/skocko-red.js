import React from "react";
import "./components-css/skocko.css";
import { useState, useEffect } from "react";

function SkockoRed({ res }) {
  const [inputOne, setinputOne] = useState(null);
  const [inputTwo, setinputTwo] = useState(null);
  const [inputThree, setinputThree] = useState(null);
  const [inputFour, setinputFour] = useState(null);
  const [inputArr, setInputArr] = useState([]);

  const [crveni, setCrveni] = useState(0);
  const [zuti, setZuti] = useState(0);

  useEffect(() => {
    setInputArr([inputOne, inputTwo, inputThree, inputFour]);
  }, [inputOne, inputTwo, inputThree, inputFour]);

  const [checkRes, setCheckRes] = useState(false);

  function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  function check() {
    let temp = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i] === inputArr[i]) {
        temp++;
      }
    }
    return temp;
  }
  function checkZuti() {
    let temp = 0;
    for (let i = 0; i < res.length; i++) {
      if (res.includes(inputArr[i])) {
        temp++;
      }
    }
    return temp;
  }
  return (
    <div className="skocko-red-wrap">
      {checkRes ? (
        <>
          <div
            className={`res-slot ${check() > 0 ? "crveni-slot" : ""} ${
              checkZuti() > 0 ? "zuti-slot" : ""
            } `}
          ></div>
          <div
            className={`res-slot ${check() > 1 ? "crveni-slot" : ""} ${
              checkZuti() > 1 ? "zuti-slot" : ""
            } `}
          ></div>
          <div
            className={`res-slot ${check() > 2 ? "crveni-slot" : ""} ${
              checkZuti() > 2 ? "zuti-slot" : ""
            } `}
          ></div>
          <div
            className={`res-slot skocko-slot-last ${
              check() > 3 ? "crveni-slot" : ""
            } ${checkZuti() > 3 ? "zuti-slot" : ""} `}
          ></div>
        </>
      ) : (
        <>
          <input
            type="text"
            inputMode="numeric"
            maxLength="1"
            className="skocko-slot"
            onKeyDownCapture={(e) => {
              if (e.key === "Backspace") {
                setinputOne("");
                e.currentTarget.value = "";
              }
            }}
            onChange={(e) => {
              if (!isNumeric(e.currentTarget.value)) {
                e.currentTarget.value = "";
              } else {
                setinputOne(e.target.value);
                e.target.nextSibling.focus();
              }
            }}
          ></input>
          <input
            type="text"
            inputMode="numeric"
            maxLength="1"
            className="skocko-slot"
            onKeyDownCapture={(e) => {
              if (e.currentTarget.value === "" && e.key === "Backspace") {
                setinputOne("");
                e.currentTarget.previousSibling.focus();
              } else {
                if (e.key === "Backspace") {
                  setinputTwo("");
                  e.currentTarget.value = "";
                }
              }
            }}
            onChange={(e) => {
              if (!isNumeric(e.currentTarget.value)) {
                e.currentTarget.value = "";
              } else {
                setinputTwo(e.target.value);
                e.target.nextSibling.focus();
              }
            }}
          ></input>
          <input
            type="text"
            inputMode="numeric"
            maxLength="1"
            className="skocko-slot"
            onKeyDownCapture={(e) => {
              if (e.currentTarget.value === "" && e.key === "Backspace") {
                setinputTwo("");
                e.currentTarget.previousSibling.focus();
              } else {
                if (e.key === "Backspace") {
                  setinputThree("");
                  e.currentTarget.value = "";
                }
              }
            }}
            onChange={(e) => {
              if (!isNumeric(e.currentTarget.value)) {
                e.currentTarget.value = "";
              } else {
                setinputThree(e.target.value);
                e.target.nextSibling.focus();
              }
            }}
          ></input>
          <input
            type="text"
            inputMode="numeric"
            maxLength="1"
            className="skocko-slot skocko-slot-last"
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                setCheckRes(true);
              }
              if (e.currentTarget.value === "" && e.key === "Backspace") {
                setinputThree("");
                e.currentTarget.previousSibling.focus();
              } else {
                if (e.key === "Backspace") {
                  setinputFour("");
                  e.currentTarget.value = "";
                }
              }
            }}
            onChange={(e) => {
              if (!isNumeric(e.currentTarget.value)) {
                e.currentTarget.value = "";
              } else {
                setinputFour(e.target.value);
              }
            }}
          ></input>
        </>
      )}
    </div>
  );
}

export default SkockoRed;
