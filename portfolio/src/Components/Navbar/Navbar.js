import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MDIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import { useTranslation } from "react-i18next";
import Modal from 'react-modal';


import "./navbar.css";
Modal.setAppElement("#root");
export default function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [modalisOpen, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="logo">
          <a href="#" class="site-name">
            <span class="link-text logo-text">Menu</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>
        <li className="item">
          <a href="#home" className="site-name">
            <FaIcons.FaHome className="ic" />
            <span className="link-text"> {t("menu.home")}</span>
          </a>
        </li>

        <li className="item">
          <a href="#about" className="site-name">
            <FaIcons.FaChild className="ic" />
            <span className="link-text">{t("menu.about")}</span>
          </a>
        </li>

        <li className="item">
          <a href="#projects" className="site-name">
            <FaIcons.FaCode className="ic" />
            <span className="link-text">{t("menu.portfolio")}</span>
          </a>
        </li>

        <li className="item">
          <a href="#contact" className="site-name">
            <FaIcons.FaCommentDots className="ic" />
            <span className="link-text">{t("menu.contact")}</span>
          </a>
        </li>

        <li className="item">
          <a href="#" className="site-name">
            <div className="dropbtn" onClick={() => setOpen(true)}>
              <MDIcons.MdLanguage className="lang" />
            </div>
            <Modal
          isOpen={modalisOpen}
          onRequestClose={() => setOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(128, 128, 128, 0.507)",
            },
            content: {
              backgroundColor: "#F8EEE7",
              padding: "20px",
              height: "max-content",
              width: "max-content",
              textAlign: "center",
              position: "absolute",
              top: "30vh",
              left: "35vw",
              right: "30vw",
              bottom: "30vh"
            },
          }}
        >
          
          <h2>{t("contacto.modal")}</h2>
              <button className="cbtn" onClick={() => i18n.changeLanguage("en")}>
                English
              </button>
              <button className="cbtn" onClick={() => i18n.changeLanguage("es")}>
                Español
              </button>
              <div>
            <button onClick={() => setOpen(false)} className="close">
              {t("contacto.close")}
            </button>
          </div>
            </Modal>
          </a>
        </li>
      </ul>
    </div>
  );
}
