import React from "react";
import "./components-css/skocko.css";
import { useState, useEffect } from "react";

function SkockoRed({ res }) {
  const [inputOne, setinputOne] = useState(0);
  const [inputTwo, setinputTwo] = useState(0);
  const [inputThree, setinputThree] = useState(0);
  const [inputFour, setinputFour] = useState(0);
  const [inputArr, setInputArr] = useState([]);

  useEffect(() => {
    setInputArr([
      inputOne.toString(),
      inputTwo.toString(),
      inputThree.toString(),
      inputFour.toString(),
    ]);
  }, [inputOne, inputTwo, inputThree, inputFour]);

  const [checkRes, setCheckRes] = useState(false);
  const [brCrveni, setBrCrveni] = useState(0);
  const [brZuti, setBrZuti] = useState(0);

  function isNumeric(str) {
    if (typeof str != "string") return false;
    if (!["1", "2", "3", "4", "5", "6"].includes(str)) return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  function checkCrveni() {
    let temp = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i] === inputArr[i]) {
        temp++;
      }
    }
    setBrCrveni(temp);
  }
  function checkZuti() {
    let temp = 0;
    const temp1 = res.slice();
    for (let i = 0; i < inputArr.length; i++) {
      if (temp1.includes(inputArr[i])) {
        temp1.splice(temp1.indexOf(inputArr[i]), 1);
        temp++;
      }
    }
    setBrZuti(temp);
  }
  return (
    <div className="skocko-red-wrap">
      {checkRes ? (
        <>
          <div className="ulaz">
            {inputArr[0] + " "}
            {inputArr[1] + " "}
            {inputArr[2] + " "}
            {inputArr[3] + " "}
          </div>
          <div
            className={`res-slot ${brCrveni > 0 ? "crveni-slot" : ""} ${
              brZuti > 0 ? "zuti-slot" : ""
            } `}
          ></div>
          <div
            className={`res-slot ${brCrveni > 1 ? "crveni-slot" : ""} ${
              brZuti > 1 ? "zuti-slot" : ""
            } `}
          ></div>
          <div
            className={`res-slot ${brCrveni > 2 ? "crveni-slot" : ""} ${
              brZuti > 2 ? "zuti-slot" : ""
            } `}
          ></div>
          <div
            className={`res-slot ${brCrveni > 3 ? "crveni-slot" : ""} ${
              brZuti > 3 ? "zuti-slot" : ""
            } `}
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
            className="skocko-slot"
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                checkCrveni();
                checkZuti();
                setCheckRes(true);
                e.currentTarget.parentElement.nextSibling.firstChild.focus();
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
