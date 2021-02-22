import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import Modal from "react-modal";

import "./styles.css";
Modal.setAppElement("#root");
export default function Contact() {
  const [t, i18n] = useTranslation("global");
  const [modalisOpen, setOpen] = useState(false);

  return (
    <div>
      <h2>Ana Paula Barúa</h2>
      <p>
        e-Mail: apbarua95@gmail.com
        <br />
        {t("contacto.phone")} +549 11-5808-1337
        <br />
        <a href="https://github.com/artoria-95" target="_blank">
          <FaIcons.FaGithubSquare className="gh" />
        </a>
        <a
          href="https://www.linkedin.com/in/ana-paula-barua-188013131/"
          target="_blank"
        >
          <FaIcons.FaLinkedin className="lin" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+5491158081337"
          target="_blank"
        >
          <FaIcons.FaWhatsappSquare className="wpp" />
        </a>
        <br />
        <button className="cbtn" onClick={() => setOpen(true)}>
          <CgIcons.CgFileDocument /> {t("contacto.cv")}
        </button>
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
              left: "15%",
              bottom: "30vh"
            },
          }}
        >
          <h2>{t("contacto.modal")}</h2>
          <a
            href="https://drive.google.com/file/d/1H4LuG8Ue832xXnAtAj_U-SF6DyVMFlYl/view?usp=sharing"
            target="_blank"
          >
            <button className="cbtn">English</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1iVc6aufyewcn2dnbzzbtUHBY5USeuq0R/view?usp=sharing"
            target="_blank"
          >
            <button className="cbtn">Español</button>
          </a>
          <div>
            <button onClick={() => setOpen(false)} className="close">
              {t("contacto.close")}
            </button>
          </div>
        </Modal>
      </p>
    </div>
  );
}
