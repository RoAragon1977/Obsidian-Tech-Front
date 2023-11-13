import { useState } from "react";

import { Link, NavLink, Navigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "../navegacion/ObsidianNavbar.css";
import FilterComponent from "../filtroNavegacion/FilterComponent";
//import Favoritos from '../favoritos/Favoritos';
import ModalLogin from "../login/ModalLogin";
import { BuyCar } from "../buycar/BuyCar";

export const ObsidianNavbar = () => {
  //useState para menu burger
  const [clicked, setClicked] = useState(false);

  function clickear() {
    setClicked(!clicked);
  }
  //para cambiar de color el navbar
  const [scrolling, setSCrolling] = useState(false);

  function changeBackG() {
    if (window.scrollY >= 10) {
      setSCrolling(true);
    } else {
      setSCrolling(false);
    }
  }

  window.addEventListener("scroll", changeBackG);

  return (
    <>
      <header className={scrolling ? "headerNav changeBg" : "headerNav"}>
        <nav className={"navBarContainer containerNav"}>
          <Link to={"/"} className="navLogo">
            Obsidian<span>-Tech</span>
          </Link>
          <div className={clicked ? "navMenu showMenu" : "navMenu"}>
            <ul className="navList">
              <li className="navItem">
                <NavLink onClick={clickear} className="navLink" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  onClick={clickear}
                  className="navLink"
                  to={"/administracion"}
                >
                  Administracion
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  onClick={clickear}
                  className="navLink"
                  to={"/nosotros"}
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink
                  onClick={clickear}
                  className="navLink"
                  to={"/recContraseña"}
                >
                  Recuperar Contraseña
                </NavLink>
              </li>
              <li className="navItem btnSize">
                <ModalLogin />
              </li>
              <li className="navItem btnSize">
                <BuyCar />
              </li>
              <li className="navItem btnSize">
                <Link to="/favoritos" className="navLink">
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
              </li>
            </ul>
            <div className="navClose">
              <button onClick={clickear} className="buttonNav">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
          <div className="navFilter">
                <FilterComponent setClicked={setClicked}/>
              </div>
          <div className="navToggle">
            <button onClick={clickear} className="buttonNav">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
