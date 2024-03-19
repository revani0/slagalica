import React from "react";
import "./components-css/spojnice.css";
import { useState } from "react";
import { act } from "react-dom/test-utils";

function Spojnice({ Spojnice }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="spojnice-wrap">
        <div className="kolona leva-kolona">
          {Spojnice[0].map((e) => (
            <div
              className={`red ${
                active == Spojnice[0].indexOf(e) ? "red-active" : ""
              }`}
            >
              {e}
            </div>
          ))}
        </div>
        <div className="kolona desna-kolona">
          {Spojnice[1].map((e) => (
            <div
              id={`${Spojnice[1].indexOf(e) + 1}`}
              className="red"
              onClick={(e) => {
                if (Spojnice[2][active] == e.currentTarget.id) {
                  e.currentTarget.classList.add("correct");
                  e.currentTarget.style.backgroundColor = "green";
                  if (active !== 10) {
                    setActive(active + 1);
                  }
                } else {
                  if (
                    !e.currentTarget.classList.contains("correct") &&
                    active < 10
                  ) {
                    e.currentTarget.style.backgroundColor = "red";
                    if (active !== 10) {
                      setActive(active + 1);
                    }
                  }
                }
              }}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Spojnice;
