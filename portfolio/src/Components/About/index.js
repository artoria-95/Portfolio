import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="div1">
      <div className="div2">
      <p>I'm interested on both Front and Back end and I love to find new things
        to learn every day, hoping to someday be part of a team that will be the best at what we do!.
      
        I'm a graduate from the HENRY bootcamp, where we had +700 hours of
        practice in real projects with technologies such as HTML, CSS, Node.js,
        Express, React, Redux, Sequelize, PostgreSQL, and MongoDb. 
        Two of said projects are shown on this page!</p>
      </div>
      <button><a href="#projects">See my projects!</a></button>
      <div className="dev">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHPxkhz29TPeg/profile-displayphoto-shrink_200_200/0/1611190654795?e=1618444800&v=beta&t=sFR3PAmdpPe-lHsKgsu1rQSlKGRFD4gX40g0CxV-smE"
          alt="ana"
        />
      </div>
    </div>
  );
}
