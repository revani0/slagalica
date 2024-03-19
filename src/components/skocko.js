import React from "react";
import "./components-css/skocko.css";
import SkockoRed from "./skocko-red";

function Skocko({ kombinacija }) {
  return (
    <div className="skocko-wrap">
      {Array.from({ length: 6 }, (_, index) => (
        <SkockoRed res={kombinacija} />
      ))}
      <div className="avoid-bug">
        <div className="child-ele"></div>
      </div>
    </div>
  );
}

export default Skocko;
