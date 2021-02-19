import React from "react";
import {useTranslation} from 'react-i18next';
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg"

import "./styles.css";

export default function Contact() {
  
const [t, i18n] = useTranslation("global");

  return (
    <div>
      <h2>Ana Paula Barúa</h2>
      <p>e-Mail: apbarua95@gmail.com
      <br/>
      {t("contacto.phone")} +549 11-5808-1337
      <br/>
      <a href="https://github.com/artoria-95" target="_blank"><FaIcons.FaGithubSquare className="gh"/></a>
      <a href="https://www.linkedin.com/in/ana-paula-barua-188013131/" target="_blank"><FaIcons.FaLinkedin className="lin"/></a>
      <a href="https://api.whatsapp.com/send?phone=+5491158081337" target="_blank"><FaIcons.FaWhatsappSquare className="wpp"/></a>
      <br/>
      <a href="https://drive.google.com/file/d/1BccY0KClJhnRTqFKd2yMqcU93Ed5r7qB/view?usp=sharing" target="_blank"><button className="cbtn"><CgIcons.CgFileDocument/> {t("contacto.cv")}</button></a>
      </p>   
    </div>
  );
}