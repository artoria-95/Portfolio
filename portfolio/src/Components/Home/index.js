import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div className="div1">
      <div className="div2">
        <h1>Hi! I'm Ana Barua!</h1>
        <p>
          I'm a FullStack Web Developer, and I'm actively looking for an
          exciting, challenging job where I can improve my skills and grow as a
          professional!
        </p>
        <div className="div3">
          <Link to="/about">
            <button className="btn">Know more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
