import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import "../bestProducts/BestProducts.css";

export const BestProducts = () => {
  return (
    <div className="bgBProduct">
      <div className="circleBlue"></div>
      <section className="bestProduct">
        <div className="bestProductHead">
          <div className="bestProductTitle">
            <h2>Los mejores productos para juegos profesionales</h2>
          </div>
          <div className="bestProductSubt">
            <p>
              Un hardware más potente no solo mejora sus experiencias en los
              juegos que están jugando actualmente, sino que también brinda a
              muchos jugadores acceso a títulos con especificaciones más
              exigentes. En Obsidian - tech lo tenemos!.
            </p>
          </div>
          <div className="boxBtnBP">
            <button className="btnBestProduct">
              ver productos <FontAwesomeIcon icon={faGamepad} />
            </button>
          </div>
        </div>
        <div className="bestProductBody">
          <div className="boxImgBP1">
            <img
              src="src/assets/bestProduct-gabinete.png"
              alt="Gabinete ITX"
              title="Gabinete ITX"
            />
          </div>
          <div className="borderCardBestProd">
            <div className="bestProductDespriction">
              <h4>PC de escritorio</h4>
              <p>
                Múltiples opciones de conectividad, incluidos HDMI, puertos USB
                y ventiladores RGB, le permiten conectar una variedad de
                periféricos fácilmente. Listo para Wi-Fi: conéctese a Internet
                de forma inalámbrica con facilidad. Precargado con el sistema
                operativo Windows 10 de 64 bits para mejorar la productividad y
                la multitarea.
              </p>
              <button className="btnBestProduct">ver más</button>
            </div>
          </div>
          <div className="boxImgBP2">
            <img
              src="src/assets/bestProduct-cpu.png"
              alt="CPU ITX"
              title="CPU ITX"
            />
          </div>
        </div>
      </section>
    </div>
  );
};