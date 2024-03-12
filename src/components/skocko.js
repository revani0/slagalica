import React from "react";
import "./components-css/skocko.css";
import SkockoRed from "./skocko-red";

const resenje = ["2", "1", "6", "6"];
const resenje1 = ["5", "6", "5", "4"];

function Skocko({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="skocko-wrap">
            <SkockoRed res={resenje} />
            <SkockoRed res={resenje} />
            <SkockoRed res={resenje} />
            <SkockoRed res={resenje} />
            <SkockoRed res={resenje} />
            <SkockoRed res={resenje} />
          </div>
        </>
      ) : (
        <>
          <div className="skocko-wrap">
            <SkockoRed res={resenje1} />
            <SkockoRed res={resenje1} />
            <SkockoRed res={resenje1} />
            <SkockoRed res={resenje1} />
            <SkockoRed res={resenje1} />
            <SkockoRed res={resenje1} />
          </div>
        </>
      )}
    </>
  );
}

export default Skocko;
