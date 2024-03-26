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
  // //PITANJA:
  // //SLOVA
  // const slova1 = ["P", "O", "R", "V", "E", "U", "T", "A", "S", "M", "O", "R"]; //OPSERVATOR
  // const slova2 = ["R", "I", "J", "G", "E", "S", "U", "T", "I", "P", "A", "S"]; //SUGERISATI
  // //BROJEVI
  // const brojevi1 = [
  //   [4, 7, 5],
  //   [1, 9, 6, 6, 15, 25],
  // ];
  // const brojevi2 = [
  //   [4, 1, 8],
  //   [5, 5, 7, 2, 20, 100],
  // ];
  // //KORAK PO KORAK
  // const korak1 = [
  //   `Ima svoje organe.`,
  //   `Može da se odreže.`,
  //   `Ima svoju upravu.`,
  //   `Ima svog inspektora.`,
  //   `Ima svoju osnovicu.`,
  //   `Državni budžet ne može bez njega.`,
  //   `Može biti na dodatu vrednost.`,
  // ]; //POREZ
  // const korak2 = [
  //   `Može biti električna.`,
  //   `Može biti mehanička.`,
  //   `Neko se oslanja na nju.`,
  //   `Ima je volja.`,
  //   `Njena jedinic je vat.`,
  //   `Samsonu je bila u kosi.`,
  //   `Može biti konjska.`,
  // ]; //SNAGA
  // //SKOCKO
  // const skocko1 = ["5", "3", "2", "6"];
  // const skocko2 = ["2", "4", "2", "5"];
  // //KO ZNA ZNA
  // //SPOJNICE
  // const spojnice1 = [
  //   [
  //     "Vimbldon(2004)",
  //     "Ali(2001)",
  //     "Edi (1996)",
  //     "Inviktus(2009)",
  //     "Sena(2010)",
  //     "Dijamantino(2018)",
  //     "Dangal(2016)",
  //     "Sibisit(2003)",
  //     "Čudo(2005)",
  //     "Lagan(2001)",
  //   ],
  //   [
  //     "Rvanje",
  //     "Fudbal",
  //     "Boks",
  //     "Tenis",
  //     "Formula 1",
  //     "Konjske Trke",
  //     "Kosarka",
  //     "Hokej",
  //     "Ragbi",
  //     "Kriket",
  //   ],
  //   [4, 3, 7, 9, 5, 2, 1, 6, 8, 10],
  // ];
  // const spojnice2 = [
  //   [
  //     "Kaunter",
  //     "Kreš",
  //     "Tvisted",
  //     "Splinter",
  //     "Elder",
  //     "Red",
  //     "Metal",
  //     "Test",
  //     "Disko",
  //     "Alan",
  //   ],
  //   [
  //     "Skrols",
  //     "Sel",
  //     "Strajk",
  //     "Bandikut",
  //     "Drajv",
  //     "Alert",
  //     "Metal",
  //     "Elisijum",
  //     "Vejk",
  //     "Gir",
  //   ],
  //   ["3", "4", "7", "2", "1", "6", "10", "5", "8", "9"],
  // ];
  // //ASOCIJACIJE
  // const asocijacije1 = [
  //   ["Škola", "Pejzaž", "Kros", "Mrtva", "Priroda"],
  //   ["Pemse", "Priče", "Novčić", "Herbarij", "Zbirka"],
  //   ["Akademija", "Primena", "Stil", "Epoha", "Umetnost"],
  //   ["Turnir", "Kompleks", "Centar", "U spomen", "Memorijal"],
  //   "Muzej",
  // ];
  // const asocijacije2 = [
  //   ["Sirena", "Sitna", "Beba", "Šala", "Mala"],
  //   ["Ivana", "Reka", "Čiča", "Petra", "Jordan"],
  //   ["Valuta", "Liga", "Zona", "Vizija", "Evro"],
  //   ["Car", "Trešnja", "Karate", "Aikido", "Japan"],
  //   "Azija",
  // ];

  // //PITANJA:
  // //SLOVA
  // const slova1 = ["O", "I", "M", "J", "I", "LJ", "A", "N", "R", "U", "N", "T"];
  // const slova2 = ["D", "I", "E", "J", "N", "F", "R", "A", "T", "P", "N", "U"];
  // //BROJEVI
  // const brojevi1 = [
  //   [7, 7, 2],
  //   [5, 6, 7, 4, 20, 75],
  // ];
  // const brojevi2 = [
  //   [1, 3, 9],
  //   [4, 5, 4, 6, 15, 75],
  // ];
  // //KORAK PO KORAK
  // const korak1 = [
  //   `Može se odnositi na kalijum ili gvoždje...`,
  //   `...Energiju...`,
  //   `...Različite hormone...`,
  //   `...Skuvane špagete...`,
  //   `...Ili kilograme...`,
  //   `Može da bude tehnološki.`,
  //   `Prema poslovici, od njega glava ne boli.`,
  // ]; //POREZ
  // const korak2 = [
  //   `Imaju ga operativni sistemi.`,
  //   `Imaju ga gradovi.`,
  //   `Koren je prideva u značenju "Koncizan".`,
  //   `Ime je filma o bombardovanju središta zemlje.`,
  //   `Imaju ga atomi.`,
  //   `Imaju ga koštice različitog voća.`,
  //   `Latinski sinonim za njega je "Nukleus".`,
  // ]; //SNAGA
  // //SKOCKO
  // const skocko1 = ["6", "5", "4", "4"];
  // const skocko2 = ["2", "3", "2", "3"];
  // //KO ZNA ZNA
  // //SPOJNICE
  // const spojnice1 = [
  //   [
  //     "Imperator",
  //     "Integral",
  //     "Italik",
  //     "Irigator",
  //     "Inspicijent",
  //     "Ilativ",
  //     "Influks",
  //     "Inkubus",
  //     "Inciziv",
  //     "Invar",
  //   ],
  //   [
  //     "Zub sekutić", //1
  //     "Kosa štamparska slova", //2
  //     "Saradnik u pozorištu", //3
  //     "Posuda za ispiranje delova tela", //4
  //     "Uticaj, upliv, delovanje", //5
  //     "Vrhovni vladar, car", //6
  //     "Pojam iz matematičke analize", //7
  //     "Legura čelika i nikla", //8
  //     "Vrsta muškog demona", //9
  //     "Padež ugrofinskom jeziku", //10
  //   ],
  //   ["6", "7", "2", "4", "3", "10", "5", "9", "1", "8"],
  // ];
  // const spojnice2 = [
  //   [
  //     "Presovati",
  //     "Plandovati",
  //     "Pečalbaritit",
  //     "Pledirati",
  //     "Pasirati",
  //     "Perforirati",
  //     "Pabirčiti",
  //     "Profanisati",
  //     "Pulverizovati",
  //     "Pirjaniti",
  //   ],
  //   [
  //     "Raditi u tudjini", //1
  //     "Skrnaviti, sramotiti", //2
  //     "Zastupati neku stvar", //3
  //     "Skupljati iz više izovra", //4
  //     "Bušiti, probijati rupice", //5
  //     "Pritiskati radi ravnanja", //6
  //     "Cediti hranu kroz sito", //7
  //     "Odmarati se, izležavati se", //8
  //     "Kuvati jelo u pari, dinstati", //9
  //     "Pretvarati u prah, raspršivati", //10
  //   ],
  //   [6, 8, 1, 3, 7, 5, 4, 2, 10, 9],
  // ];
  // //ASOCIJACIJE
  // const asocijacije1 = [
  //   ["Društvo", "Bananica", "Čorba", "Euro", "Krem"],
  //   ["Američka", "Španska", "Krompir", "Meso", "Pita"],
  //   ["Crna", "Bilijar", "Jama", "Kaiš", "Rupa"],
  //   ["Zub", "Litar", "Kafa", "Telo", "Mleko"],
  //   "Sir",
  // ];
  // const asocijacije2 = [
  //   ["Groznica", "Semafor", "Pun", "Prazan", "Stadion"],
  //   ["Tepih", "Bicikl", "Koza", "Slava", "Staza"],
  //   ["Veliko", "Peta", "Prsti", "Taban", "Stopalo"],
  //   ["Sparta", "Kičma", "Komisija", "Postupak", "Disciplina"],
  //   "Atletika",
  // ];

  // //PITANJA:
  // //SLOVA
  // const slova1 = ["", "", "", "", "", "", "", "", "", "", "", ""];
  // const slova2 = ["", "", "", "", "", "", "", "", "", "", "", ""];
  // //BROJEVI
  // const brojevi1 = [
  //   [, ,],
  //   [, , , , ,],
  // ];
  // const brojevi2 = [
  //   [, ,],
  //   [, , , , ,],
  // ];
  // //KORAK PO KORAK
  // const korak1 = [``, ``, ``, ``, ``, ``, ``]; //
  // const korak2 = [``, ``, ``, ``, ``, ``, ``]; //
  // //SKOCKO
  // const skocko1 = ["6", "5", "4", "4"];
  // const skocko2 = ["2", "3", "2", "3"];
  // //KO ZNA ZNA
  // //SPOJNICE
  // const spojnice1 = [
  //   ["", "", "", "", "", "", "", "", "", ""],
  //   [
  //     "", //1
  //     "", //2
  //     "", //3
  //     "", //4
  //     "", //5
  //     "", //6
  //     "", //7
  //     "", //8
  //     "", //9
  //     "", //10
  //   ],
  //   ["", "", "", "", "", "", "", "", "", ""],
  // ];
  // const spojnice2 = [
  //   ["", "", "", "", "", "", "", "", "", ""],
  //   [
  //     "", //1
  //     "", //2
  //     "", //3
  //     "", //4
  //     "", //5
  //     "", //6
  //     "", //7
  //     "", //8
  //     "", //9
  //     "", //10
  //   ],
  //   ["", "", "", "", "", "", "", "", "", ""],
  // ];
  // //ASOCIJACIJE
  // const asocijacije1 = [
  //   ["", "", "", "", ""],
  //   ["", "", "", "", ""],
  //   ["", "", "", "", ""],
  //   ["", "", "", "", ""],
  //   "",
  // ];
  // const asocijacije2 = [
  //   ["", "", "", "", ""],
  //   ["", "", "", "", ""],
  //   ["", "", "", "", ""],
  //   ["", "", "", "", ""],
  //   "",
  // ];

  //PITANJA:
  //SLOVA
  const slova1 = ["T", "N", "E", "H", "R", "S", "M", "I", "B", "U", "T", "N"]; //INSTRUMENT
  const slova2 = ["S", "N", "O", "J", "P", "R", "Š", "D", "A", "E", "B", "T"]; //PRAVEDNOST
  //BROJEVI
  const brojevi1 = [
    [3, 1, 1],
    [9, 9, 1, 3, 15, 50],
  ];
  const brojevi2 = [
    [1, 4, 7],
    [1, 1, 8, 9, 10, 25],
  ];
  //KORAK PO KORAK
  const korak1 = [
    `Može da bude rezerva.`,
    `Ima električnu varijantu.`,
    `Ima i živu varijantu.`,
    `Može imati veze s provlačenjem.`,
    `Generalno služi za zaštitu...`,
    `... ali često može da se preskoči...`,
    `... zbog čega je ponekad od bodljikave žice.`,
  ]; //OGRADA
  const korak2 = [
    `Ima svog čoveka.`,
    `Ima svoju stjuardesu.`,
    `U romanu smo na njoj nakratko predivni.`,
    `U nazivu drugog romana je semolj.`,
    `Može da bude država.`,
    `U nazivu dokumentarne serije je planeta`,
    `Osnova je reči zemljouz i zemljopis.`,
  ]; //ZEMLJA
  //SKOCKO
  const skocko1 = ["5", "5", "6", "2"];
  const skocko2 = ["1", "6", "1", "6"];
  //KO ZNA ZNA
  //SPOJNICE
  const spojnice1 = [
    [
      "IVAN IV GROZNI",
      "SULEMAN VELIČANSTVENI",
      "KARLO V",
      "HENRI VIII",
      "BABUR",
      "FRANSOA I",
      "ŽOAO III",
      "MONTEZUMA II",
      "ATAVALPA",
      "ŽIGMUND II AVGUST",
    ],
    [
      "ASTEČKO CARSTVO", //1
      "POLJSKA I LITVANIA", //2
      "CARSTVO INKA", //3
      "OSMANSKO CARSTVO", //4
      "MOGULSKO CARSTVO", //5
      "SVETO RIMSKO CARSTVO", //6
      "PORTUGALIA", //7
      "ENGLESKA", //8
      "FRANCUSKA", //9
      "RUSIJA", //10
    ],
    ["10", "4", "6", "8", "5", "9", "7", "1", "3", "2"],
  ]; // VLADARI IZ 16. VEKA I NIHOVE DRŽAVE
  const spojnice2 = [
    [
      "ANKONA",
      "ANKARA",
      "ASMARA",
      "ALKMAR",
      "AVEIRO",
      "AGADEZ",
      "ABICAN",
      "ALMATI",
      "ANADIR",
      "AGADIR",
    ],
    [
      "ITALIJA", //1
      "ERITREJA", //2
      "NIGER", //3
      "PORTUGALIJA", //4
      "KAZAHSTAN", //5
      "OBALA SLONOVAČE", //6
      "HOLANDIJA", //7
      "TURKSA", //8
      "MAROKO", //9
      "RUSIJA", //10
    ],
    ["1", "8", "2", "7", "4", "3", "6", "5", "10", "9"],
  ]; //ŠESTOSLOVNI GRADOVI NA „A" I NIHOVE DRŽAVE
  //ASOCIJACIJE
  const asocijacije1 = [
    ["BAS", "PEVAČ", "PODIZANJE", "DOBAR", "GLAS"],
    ["JAKNA", "GARNITURA", "SVRAB", "KOST", "KOŽA"],
    ["BANANICA", "ČORBA", "SIR", "DRUŠTVO", "KREM"],
    ["USTA", "POVRŠINA", "VODONIK", "KISEONIK", "VODA"],
    "BOJA",
  ];
  const asocijacije2 = [
    ["SPAVANJE", "FAZA", "ANTONIO", "SALVADOR", "SAN"],
    ["DIMNJAK", "PLIVANJE", "VUNA", "GRČKO SLOVO", "KAPA"],
    ["RUKOMET", "RAGBI", "TIM", "CENTAR", "SPORT"],
    ["REVOLUCIJA", "VODOLIJA", "RIBE", "ZALJUBLJENI", "FEBRUAR"],
    "ZIMA",
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
