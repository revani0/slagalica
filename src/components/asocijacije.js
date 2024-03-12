import React from "react";
import "./components-css/asocijacije.css";

function Asocijacije({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="asocijacije-wrap">
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Prostrano";
                }}
              >
                A1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Ogromno";
                }}
              >
                A2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Slovo";
                }}
              >
                A3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Finale";
                }}
              >
                A4
              </div>
            </div>
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Leva";
                }}
              >
                B1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Lakat";
                }}
              >
                B2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Desna";
                }}
              >
                B3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Pravda";
                }}
              >
                B4
              </div>
            </div>
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Tim";
                }}
              >
                C1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Gimnazija";
                }}
              >
                C2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Bavljenje";
                }}
              >
                C3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Hala";
                }}
              >
                C4
              </div>
            </div>
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Privreda";
                }}
              >
                D1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Advokat";
                }}
              >
                D2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Inzenjer";
                }}
              >
                D3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Lekar";
                }}
              >
                D4
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="asocijacije-wrap">
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Povez";
                }}
              >
                A1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Poezija";
                }}
              >
                A2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Roman";
                }}
              >
                A3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Utisak";
                }}
              >
                A4
              </div>
            </div>
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Karta";
                }}
              >
                B1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Pripadnik";
                }}
              >
                B2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Zakon";
                }}
              >
                B3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Porodica";
                }}
              >
                B4
              </div>
            </div>
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Faca";
                }}
              >
                C1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Uprava";
                }}
              >
                C2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Plan";
                }}
              >
                C3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Metropola";
                }}
              >
                C4
              </div>
            </div>
            <div className="kolona-asocijacija">
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Seoba";
                }}
              >
                D1
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Izreka";
                }}
              >
                D2
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Pozoriste";
                }}
              >
                D3
              </div>
              <div
                className="red-asocijacija"
                onClick={(e) => {
                  e.currentTarget.innerHTML = "Bajka";
                }}
              >
                D4
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Asocijacije;
