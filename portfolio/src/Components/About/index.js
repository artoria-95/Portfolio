import React from "react";
import "./styles.css";
import {useTranslation} from 'react-i18next';

export default function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="div1">
      <div className="div2">
      <p>
      {t("about.text1")}
      <br/>
      {t("about.text2")}
      </p>
      <a href="#projects"><button className="btn">{t("about.boton")}</button></a>
      </div>
      <div className="dev">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHPxkhz29TPeg/profile-displayphoto-shrink_200_200/0/1611190654795?e=1618444800&v=beta&t=sFR3PAmdpPe-lHsKgsu1rQSlKGRFD4gX40g0CxV-smE"
          alt="ana"
        />
      </div>
    </div>
  );
}
