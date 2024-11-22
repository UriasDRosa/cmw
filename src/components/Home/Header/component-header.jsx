import React from "react";

import "./style.css";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="cabecalho">
      <h1>Criando minha Web</h1>
      <div className="home-section">
        <Link to="/selection">
          <VscHome className="home" />
        </Link>
      </div>
    </header>
  );
}
