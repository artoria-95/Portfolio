import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
export default function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="div-1">
      <div className="div-2">
        <p>
          {t("about.text1")}
          <br />
          {t("about.text2")}
          <br />
          <div className="skills">
            <i><FaIcons.FaHtml5 /></i>
            <i><FaIcons.FaCss3Alt /></i>
            <i><FaIcons.FaNodeJs /></i>
            <i><FaIcons.FaReact /></i>
            <i><SiIcons.SiRedux /></i>
            <i><SiIcons.SiPostgresql /></i>
            <i><SiIcons.SiMongodb /></i>
          </div>
        </p>
        <a href="#projects">
          <button className="abtn">{t("about.boton")}</button>
        </a>
      </div>
    </div>
  );
}
