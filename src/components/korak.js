import React from "react";
import "./components-css/korak.css";

function Korak({ pitanja }) {
  return (
    <div className="koraci-wrap">
      {pitanja.map((e) => (
        <div
          className={"korak korak-hide"}
          onClick={(e) => {
            if (e.currentTarget.classList.contains("korak-hide")) {
              e.currentTarget.classList.remove("korak-hide");
            } else {
              e.currentTarget.classList.add("korak-hide");
            }
          }}
        >
          {e}
        </div>
      ))}
    </div>
  );
}

export default Korak;
