import React from 'react';
import './styles.css';
import {useTranslation} from 'react-i18next';

export default function Projects(){
  const [t, i18n] = useTranslation("global");

  return(
    
    <div className="project-container">
      <div className="project">
        <h3>E-Commerce</h3>
        <p>
        {t("ecom.description")}
        <br/>
        {t("ecom.technologies")}
        </p>
        <button className="btn">{t("projects.boton3")}</button>
        <a href="https://github.com/artoria-95/ecommerce" target="_blank"><button className="btn">{t("projects.boton2")}</button></a>
      </div>
      <div className="project">
        <h3>HENRY App</h3>
        <p>
        {t("HENRYApp.description")}
        <br/>
        {t("HENRYApp.technologies")}
        </p>
        <button className="btn">{t("projects.boton3")}</button>
        <button className="btn">{t("projects.boton2")}</button>
      </div>
    </div>
    
  )
}