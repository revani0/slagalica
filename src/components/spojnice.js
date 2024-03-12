import React from "react";
import "./components-css/spojnice.css";

function Spojnice({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="spojnice-wrap">
            <div className="kolona leva-kolona">
              <div className="red">Koreografija</div>
              <div className="red">Kinematografija</div>
              <div className="red">Bibliografija</div>
              <div className="red">Ortografija</div>
              <div className="red">Demografija</div>
              <div className="red">Hagiografija</div>
              <div className="red">Hidrografija</div>
              <div className="red">Serigrafija</div>
              <div className="red">Mamografija</div>
              <div className="red">Stenografija</div>
            </div>
            <div className="kolona desna-kolona">
              <div className="red">Nauka o stanovnistvu</div>
              <div className="red">Brzo zapisivanje govora</div>
              <div className="red">Filmska umetnost</div>
              <div className="red">Opis zivota nekog sveca</div>
              <div className="red">Rendgensko snimanje dojki</div>
              <div className="red">Popis pisanih dela</div>
              <div className="red">Komponovanje plesnih igara</div>
              <div className="red">Proucavanje vodenih povrsina</div>
              <div className="red">Pravopis</div>
              <div className="red">Sitostampa</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="spojnice-wrap">
            <div className="kolona leva-kolona">
              <div className="red">Erin</div>
              <div className="red">Forest</div>
              <div className="red">Dzeri</div>
              <div className="red">Majkl</div>
              <div className="red">Eni</div>
              <div className="red">Bari</div>
              <div className="red">Meri</div>
              <div className="red">Dejvid</div>
              <div className="red">Dzoni</div>
              <div className="red">Mildred</div>
            </div>
            <div className="kolona desna-kolona">
              <div className="red">Popis</div>
              <div className="red">Hol</div>
              <div className="red">Koperfild</div>
              <div className="red">Belinda</div>
              <div className="red">Brokovic</div>
              <div className="red">Gamp</div>
              <div className="red">Pirs</div>
              <div className="red">Klejton</div>
              <div className="red">Lindon</div>
              <div className="red">Magvajer</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Spojnice;
