import React, { useState } from "react";
//import Route, {Link, Router} from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as MDIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import {useTranslation} from 'react-i18next';

import "./navbar.css";

export default function Navbar() {

  return (
    
      <div className="navbar">
        <div className="media">
          <a href="https://github.com/artoria-95" target="__blank">
            <FaIcons.FaGithubSquare className="gh" />
          </a>

          <a href="https://www.linkedin.com/in/ana-paula-barua-188013131/"
            target="__blank">
            <FaIcons.FaLinkedin className="in" />
          </a>
        </div>
        <div className="stuff">
          <MDIcons.MdLanguage className="lang" />
          <FaIcons.FaLowVision className="dalt" />
          <a href="#home"><IoIcons.IoIosArrowDropupCircle className="top" /></a>
        </div>
      </div>
    
  );
}
