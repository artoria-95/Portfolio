import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MDIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import { useTranslation } from "react-i18next";

import "./navbar.css";

export default function Navbar() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul className="side-nav">
        <li className="item">
          <a href="#home" className="home">
            {t("menu.home")}
          </a>
        </li>

        <li className="item">
          <a href="#about" className="site-name">
            {t("menu.about")}
          </a>
        </li>

        <li className="item">
          <a href="#projects" className="site-name">
            {t("menu.portfolio")}
          </a>
        </li>

        <li className="item">
          <a href="#contact" className="site-name">
            {t("menu.contact")}
          </a>
        </li>

        <li className="item">
          <MDIcons.MdLanguage className="lang" />
          <button className="lan" onClick={() => i18n.changeLanguage("en")}>
            {" "}
            English
          </button> |{" "}
          <button className="lan" onClick={() => i18n.changeLanguage("es")}>Español</button>
        </li>
      </ul>

      {/*       
      <div className="dropup">
        <div className="dropbtn">
          <MDIcons.MdLanguage className="lang" />
        </div>
        <div className="dropup-content">
          <button className="item" onClick={() => i18n.changeLanguage("en")}>
            English
          </button>
          <button className="item" onClick={() => i18n.changeLanguage("es")}>
            Español
          </button>
        </div>
      </div> */}
    </div>
  );
}
