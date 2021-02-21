import React from "react";
import {useTranslation} from 'react-i18next';
import {useSpring, animated} from 'react-spring';
import "./styles.css";

export default function Home() {
  
  const props = useSpring({opacity: 1, from: {opacity: 0}});
const [t, i18n] = useTranslation("global");

  return (
    <div className="div1">
      
      <animated.div className="div2" style={props}>
        <h1>{t("home.title")}</h1>
        <p>
          {t("home.intro")}
        </p>
        
      </animated.div>
      <animated.div className="dev" style={props}>
        
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHPxkhz29TPeg/profile-displayphoto-shrink_200_200/0/1611190654795?e=1618444800&v=beta&t=sFR3PAmdpPe-lHsKgsu1rQSlKGRFD4gX40g0CxV-smE"
          className="ana"
        />
        <div class="glow-wrap">
    <i class="glow"></i>
  </div>
        <a href="#about"><button className="hbtn">{t("home.boton")}</button></a>
        
      </animated.div>
    </div>
  );
}
