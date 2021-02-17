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
    <div className="navbar">
      <div className="media">
        <a href="https://github.com/artoria-95" target="__blank">
          <FaIcons.FaGithubSquare className="gh" />
        </a>

        <a
          href="https://www.linkedin.com/in/ana-paula-barua-188013131/"
          target="__blank"
        >
          <FaIcons.FaLinkedin className="in" />
        </a>
        <a href="https://drive.google.com/file/d/1BccY0KClJhnRTqFKd2yMqcU93Ed5r7qB/view?usp=sharing" target="__blank"><GrIcons.GrDocumentText className="resume"/></a>
      </div>
      <div className="stuff">
        <div className="dropup">
          <div className="dropbtn">
            <MDIcons.MdLanguage className="lang" />
          </div>
          <div className="dropup-content">
            <button className="item" onClick={()=>i18n.changeLanguage("en")}>English</button>
            <button className="item" onClick={()=>i18n.changeLanguage("es")}>Español</button>
          </div>
        </div>
<div className="dropup">
          <div className="dropbtn">
        <FaIcons.FaLowVision className="dalt" />
          </div>
          <div className="dropup-content">
            <button className="item">{t("dropups.dalt")}</button>
            <button className="item">{t("dropups.reg")}</button>
          </div>
        </div>
        <a href="#home">
          <IoIcons.IoIosArrowDropupCircle className="top" />
        </a>
      </div>
    </div>
  );
}
