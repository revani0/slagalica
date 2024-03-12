import "./App.css";
import { useState } from "react";
import Slova from "./components/slova";
import Matematika from "./components/matematika";
import Korak from "./components/korak";
import Skocko from "./components/skocko";
import Spojnice from "./components/spojnice";
import Asocijacije from "./components/asocijacije";

function App() {
  const [active, setActive] = useState(0);
  return (
    <>
      <p className="counter">{active + "/12"}</p>
      <div className={`main ${active === 0 ? "main-start" : ""}`}>
        {active === 1 ? <Slova toggle={true} /> : ""}
        {active === 2 ? <Slova toggle={false} /> : ""}
        {active === 3 ? <Matematika toggle={true} /> : ""}
        {active === 4 ? <Matematika toggle={false} /> : ""}
        {active === 5 ? <Korak toggle={true} /> : ""}
        {active === 6 ? <Korak toggle={false} /> : ""}
        {active === 7 ? <Skocko toggle={true} /> : ""}
        {active === 8 ? <Skocko toggle={false} /> : ""}
        {active === 9 ? <Spojnice toggle={true} /> : ""}
        {active === 10 ? <Spojnice toggle={false} /> : ""}
        {active === 11 ? <Asocijacije toggle={true} /> : ""}
        {active === 12 ? <Asocijacije toggle={false} /> : ""}
      </div>
      <div className="nav-btn-wrap">
        <div
          className="btn btn-prev"
          onClick={() => {
            if (active !== 0) {
              setActive(active - 1);
            }
          }}
        >
          Prethodna igra
        </div>
        <div
          className="btn btn-next"
          onClick={() => {
            if (active !== 12) {
              setActive(active + 1);
            }
          }}
        >
          Sledeca igra
        </div>
      </div>
    </>
  );
}

export default App;
