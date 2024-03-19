import React, { useState } from "react";
import "./components-css/asocijacije.css";

function Asocijacije({ Asocijacije }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [finale, setFinale] = useState(0);
  return (
    <div className="asocijacije-primary">
      <div className="asocijacije-wrap">
        <div className="kolona-asocijacija">
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[0][0];
            }}
          >
            A1
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[0][1];
            }}
          >
            A2
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[0][2];
            }}
          >
            A3
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[0][3];
            }}
          >
            A4
          </div>
          <div
            className="red-asocijacija red-resenje"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[0][4];
              if (a === 1) {
                e.currentTarget.style.backgroundColor = "Blue";
              }
              if (a === 2) {
                e.currentTarget.style.backgroundColor = "Red";
                setA(a - 1);
              }
              if (a !== 2) {
                setA(a + 1);
              }
            }}
          >
            A
          </div>
        </div>
        <div className="kolona-asocijacija">
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[1][0];
            }}
          >
            B1
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[1][1];
            }}
          >
            B2
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[1][2];
            }}
          >
            B3
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[1][3];
            }}
          >
            B4
          </div>
          <div
            className="red-asocijacija red-resenje"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[1][4];
              if (b === 1) {
                e.currentTarget.style.backgroundColor = "Blue";
              }
              if (b === 2) {
                e.currentTarget.style.backgroundColor = "Red";
                setB(b - 1);
              }
              if (b !== 2) {
                setB(b + 1);
              }
            }}
          >
            B
          </div>
        </div>
        <div className="kolona-asocijacija">
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[2][0];
            }}
          >
            C1
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[2][1];
            }}
          >
            C2
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[2][2];
            }}
          >
            C3
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[2][3];
            }}
          >
            C4
          </div>
          <div
            className="red-asocijacija red-resenje"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[2][4];
              if (c === 1) {
                e.currentTarget.style.backgroundColor = "Blue";
              }
              if (c === 2) {
                e.currentTarget.style.backgroundColor = "Red";
                setC(c - 1);
              }
              if (c !== 2) {
                setC(c + 1);
              }
            }}
          >
            C
          </div>
        </div>
        <div className="kolona-asocijacija">
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[3][0];
            }}
          >
            D1
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[3][1];
            }}
          >
            D2
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[3][2];
            }}
          >
            D3
          </div>
          <div
            className="red-asocijacija"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[3][3];
            }}
          >
            D4
          </div>
          <div
            className="red-asocijacija red-resenje"
            onClick={(e) => {
              e.currentTarget.innerHTML = Asocijacije[3][4];
              if (d === 1) {
                e.currentTarget.style.backgroundColor = "Blue";
              }
              if (d === 2) {
                e.currentTarget.style.backgroundColor = "Red";
                setD(d - 1);
              }
              if (d !== 2) {
                setD(d + 1);
              }
            }}
          >
            D
          </div>
        </div>
      </div>
      <div
        className="red-asocijacija red-resenje finalno-resenje"
        onClick={(e) => {
          e.currentTarget.innerHTML = Asocijacije[4];
          if (finale === 1) {
            e.currentTarget.style.backgroundColor = "Blue";
          }
          if (finale === 2) {
            e.currentTarget.style.backgroundColor = "Red";
            setFinale(finale - 1);
          }
          if (finale !== 2) {
            setFinale(finale + 1);
          }
        }}
      >
        Finalno
      </div>
    </div>
  );
}

export default Asocijacije;
