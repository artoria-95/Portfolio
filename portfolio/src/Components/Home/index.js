import React from "react";
import {useTranslation} from 'react-i18next';
import "./styles.css";

export default function Home() {
  
const [t, i18n] = useTranslation("global");

  return (
    <div className="div1">
      
      <div className="div2">
        <h1>{t("home.title")}</h1>
        <p>
          {t("home.intro")}
        </p>
        <a href="#about"><button className="hbtn">{t("home.boton")}</button></a>
        
      </div>
    </div>
  );
}
