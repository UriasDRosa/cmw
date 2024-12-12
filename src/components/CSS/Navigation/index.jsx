import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navigation() {
  return (
    <nav className="menu-lateral">
      <h1>CSS</h1>
      <ul className="list-content">
        <li>
          <Link to={"/css"} className="link">
            Modulo I - Introdução
          </Link>
        </li>
        <ul className="module1">
          <li>
            <Link to={"/css/usingFor"} className="link">
              Para que utilizamos CSS
            </Link>
          </li>
          <li>
            <Link to={"/css/howUsing"} className="link">
              Como estilizar as tags
            </Link>
          </li>
          <li>
            <Link to={"/css/textFonts"} className="link">
              Fontes e Texto
            </Link>
          </li>
        </ul>
        <li>
          <Link to={"/css/spacing"} className="link">
            Modulo II - Espaçamento
          </Link>
        </li>
        <ul className="module2">
          <li>
            <Link to={"/css/spacing/margin"} className="link">
              Margin
            </Link>
          </li>
          <li>
            <Link to={"/css/spacing/padding"} className="link">
              Padding
            </Link>
          </li>
          <li>
            <Link to={"/css/spacing/border"} className="link">
              Bordas
            </Link>
          </li>
          <li>
            <Link to={"/css/spacing/sizing"} className="link">
              Tamanho dos elementos
            </Link>
          </li>
        </ul>
        <li>
          <Link to={"/css/flexBox"} className="link">
            Modulo III - Flexbox
          </Link>
        </li>
        <ul className="module3">
          <li>
            <Link to={"/css/flexBox/justifyContent"} className="link">
              Justificar o conteúdo
            </Link>
          </li>
          <li>
            <Link to={"/css/flexBox/AlignItems"} className="link">
              Alinhar os elementos
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
