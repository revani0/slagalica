import React from "react";
import "./components-css/korak.css";
import { useState } from "react";

function Korak({ toggle }) {
  const [prvi, setPrvi] = useState(true);
  const [drugi, setDrugi] = useState(true);
  const [treci, setTreci] = useState(true);
  const [cetvrti, setCetvrti] = useState(true);
  const [peti, setPeti] = useState(true);
  const [sesti, setSesti] = useState(true);
  const [sedmi, setSedmi] = useState(true);
  return (
    <>
      {toggle ? (
        <>
          <div className="koraci-wrap">
            <div
              className={`korak ${prvi ? "korak-hide" : ""}`}
              onClick={() => {
                setPrvi(!prvi);
              }}
            >
              Deo je poznate replike iz filma "Mi nismo Andjeli".
            </div>
            <div
              className={`korak ${drugi ? "korak-hide" : ""}`}
              onClick={() => {
                setDrugi(!drugi);
              }}
            >
              Srece se u industriji zavace dalekog istoka.
            </div>
            <div
              className={`korak ${treci ? "korak-hide" : ""}`}
              onClick={() => {
                setTreci(!treci);
              }}
            >
              Ima svoj sumrak.
            </div>
            <div
              className={`korak ${cetvrti ? "korak-hide" : ""}`}
              onClick={() => {
                setCetvrti(!cetvrti);
              }}
            >
              Naziv je tv serije s "Vikendom" i Lili-Rouz Dep.
            </div>
            <div
              className={`korak ${peti ? "korak-hide" : ""}`}
              onClick={() => {
                setPeti(!peti);
              }}
            >
              Moze se odnositi na mlade ili naciju.
            </div>
            <div
              className={`korak ${sesti ? "korak-hide" : ""}`}
              onClick={() => {
                setSesti(!sesti);
              }}
            >
              U engleskom izgovoru je rok muzicar Bili.
            </div>
            <div
              className={`korak korak-last ${sedmi ? "korak-hide" : ""}`}
              onClick={() => {
                setSedmi(!sedmi);
              }}
            >
              Osnova je reci idolatrija.
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="koraci-wrap">
            <div
              className={`korak ${prvi ? "korak-hide" : ""}`}
              onClick={() => {
                setPrvi(!prvi);
              }}
            >
              Prva je polovina imena slovenskog mitskog bica.
            </div>
            <div
              className={`korak ${drugi ? "korak-hide" : ""}`}
              onClick={() => {
                setDrugi(!drugi);
              }}
            >
              Moze da bude Kristijan.
            </div>
            <div
              className={`korak ${treci ? "korak-hide" : ""}`}
              onClick={() => {
                setTreci(!treci);
              }}
            >
              Nadimak je lika iz tv serije "Narkos: Meksiko".
            </div>
            <div
              className={`korak ${cetvrti ? "korak-hide" : ""}`}
              onClick={() => {
                setCetvrti(!cetvrti);
              }}
            >
              Cini prva cetiri slova naziva banatskog grada.
            </div>
            <div
              className={`korak ${peti ? "korak-hide" : ""}`}
              onClick={() => {
                setPeti(!peti);
              }}
            >
              Ime je holandijske teniserke Bertens.
            </div>
            <div
              className={`korak ${sesti ? "korak-hide" : ""}`}
              onClick={() => {
                setSesti(!sesti);
              }}
            >
              Nadimak je frontmena "Pilota" Zorana Lesendrica.
            </div>
            <div
              className={`korak korak-last ${sedmi ? "korak-hide" : ""}`}
              onClick={() => {
                setSedmi(!sedmi);
              }}
            >
              Uz "Riki" je biljka iz porodice mahunarki.
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Korak;
