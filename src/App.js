import "./App.css";
import { useState } from "react";
import Slova from "./components/slova";
import Matematika from "./components/matematika";
import Korak from "./components/korak";
import Skocko from "./components/skocko";
import KoZna from "./components/kozna";
import Spojnice from "./components/spojnice";
import Asocijacije from "./components/asocijacije";

function App() {
  //PITANJA:
  //SLOVA
  const slova1 = ["P", "O", "R", "V", "E", "U", "T", "A", "S", "M", "O", "R"]; //OPSERVATOR
  const slova2 = ["R", "I", "J", "G", "E", "S", "U", "T", "I", "P", "A", "S"]; //SUGERISATI
  //BROJEVI
  const brojevi1 = [
    [4, 7, 5],
    [1, 9, 6, 6, 15, 25],
  ];
  const brojevi2 = [
    [4, 1, 8],
    [5, 5, 7, 2, 20, 100],
  ];
  //KORAK PO KORAK
  const korak1 = [
    `Ima svoje organe.`,
    `Može da se odreže.`,
    `Ima svoju upravu.`,
    `Ima svog inspektora.`,
    `Ima svoju osnovicu.`,
    `Državni budžet ne može bez njega.`,
    `Može biti na dodatu vrednost.`,
  ]; //POREZ
  const korak2 = [
    `Može biti električna.`,
    `Može biti mehanička.`,
    `Neko se oslanja na nju.`,
    `Ima je volja.`,
    `Njena jedinic je vat.`,
    `Samsonu je bila u kosi.`,
    `Može biti konjska.`,
  ]; //SNAGA
  //SKOCKO
  const skocko1 = ["5", "3", "2", "6"];
  const skocko2 = ["2", "4", "2", "5"];
  //KO ZNA ZNA
  //SPOJNICE
  const spojnice1 = [
    [
      "Vimbldon(2004)",
      "Ali(2001)",
      "Edi (1996)",
      "Inviktus(2009)",
      "Sena(2010)",
      "Dijamantino(2018)",
      "Dangal(2016)",
      "Sibisit(2003)",
      "Čudo(2005)",
      "Lagan(2001)",
    ],
    [
      "Rvanje",
      "Fudbal",
      "Boks",
      "Tenis",
      "Formula 1",
      "Konjske Trke",
      "Kosarka",
      "Hokej",
      "Ragbi",
      "Kriket",
    ],
    [4, 3, 7, 9, 5, 2, 1, 6, 8, 10],
  ];
  const spojnice2 = [
    [
      "Kaunter",
      "Kreš",
      "Tvisted",
      "Splinter",
      "Elder",
      "Red",
      "Metal",
      "Test",
      "Disko",
      "Alan",
    ],
    [
      "Skrols",
      "Sel",
      "Strajk",
      "Bandikut",
      "Drajv",
      "Alert",
      "Metal",
      "Elisijum",
      "Vejk",
      "Gir",
    ],
    ["3", "4", "7", "2", "1", "6", "10", "5", "8", "9"],
  ];
  //ASOCIJACIJE
  const asocijacije1 = [
    ["Škola", "Pejzaž", "Kros", "Mrtva", "Priroda"],
    ["Pemse", "Priče", "Novčić", "Herbarij", "Zbirka"],
    ["Akademija", "Primena", "Stil", "Epoha", "Umetnost"],
    ["Turnir", "Kompleks", "Centar", "U spomen", "Memorijal"],
    "Muzej",
  ];
  const asocijacije2 = [
    ["Sirena", "Sitna", "Beba", "Šala", "Mala"],
    ["Ivana", "Reka", "Čiča", "Petra", "Jordan"],
    ["Valuta", "Liga", "Zona", "Vizija", "Evro"],
    ["Car", "Trešnja", "Karate", "Aikido", "Japan"],
    "Azija",
  ];
  const [active, setActive] = useState(0);
  return (
    <>
      <p className="counter">{active + "/13"}</p>
      <div className={`main ${active === 0 ? "main-start" : ""}`}>
        {active === 1 ? <Slova letters={slova1} /> : ""}
        {active === 2 ? <Slova letters={slova2} /> : ""}
        {active === 3 ? <Matematika numbers={brojevi1} /> : ""}
        {active === 4 ? <Matematika numbers={brojevi2} /> : ""}
        {active === 5 ? <Korak pitanja={korak1} /> : ""}
        {active === 6 ? <Korak pitanja={korak2} /> : ""}
        {active === 7 ? <Skocko kombinacija={skocko1} /> : ""}
        {active === 8 ? <Skocko kombinacija={skocko2} /> : ""}
        {/* KO ZNA ZNA */}
        {active === 9 ? <KoZna /> : ""}
        {active === 10 ? <Spojnice Spojnice={spojnice1} /> : ""}
        {active === 11 ? <Spojnice Spojnice={spojnice2} /> : ""}
        {active === 12 ? <Asocijacije Asocijacije={asocijacije1} /> : ""}
        {active === 13 ? <Asocijacije Asocijacije={asocijacije2} /> : ""}
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
            if (active !== 13) {
              setActive(active + 1);
            }
          }}
        >
          Sledeća igra
        </div>
      </div>
    </>
  );
}

export default App;
