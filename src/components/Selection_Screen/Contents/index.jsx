import React from "react";

import "./style.css";

import html5Image from "../../../assets/html-5.png";
import css3Image from "../../../assets/css-3.png";
import jsImage from "../../../assets/js.png";

import { Link } from "react-router-dom";

export default function Contents() {
  return (
    <div className="contents">
      <div className="html">
        <p>
          <em>HTML5</em>
        </p>
        <Link to="/html" className="link">
          <img src={html5Image} alt="Imagem do HTML5" />
        </Link>
      </div>

      <div className="css">
        <p>
          <em>CSS3</em>
        </p>
        <Link to="/css" className="link">
          <img src={css3Image} alt="Imagem do CSS3" />
        </Link>
      </div>
      <div className="js">
        <p>
          <em>Javascript</em>
        </p>
        <Link to="/js" className="link">
          <img src={jsImage} alt="Imagem do Javascript" />
        </Link>
      </div>
    </div>
  );
}
