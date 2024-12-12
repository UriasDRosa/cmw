import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navigation() {
  return (
    <nav className="menu-lateral">
      <h1>JavaScript</h1>
      <ul className="list-content">
        <li>
          <Link to={"/js"} className="link">
            Modulo I - Introdução
          </Link>
        </li>
        <ul className="module1">
          <li>
            <Link to={"/js/relacao"} className="link">
              Relacao entre JS, HTML e CSS
            </Link>
          </li>
          <li>
            <Link to={"/js/variaveis"} className="link">
              Variáveis JS
            </Link>
          </li>
          <li>
            <Link to={"/js/ordem"} className="link">
              Ordem de execução
            </Link>
          </li>
        </ul>
        <li>
          <Link to={"/js/teoria"} className="link">
            Modulo II - Conceitos Teóricos
          </Link>
        </li>
        <ul className="module2">
          <li>
            <Link to={"/js/teoria/codes"} className="link">
              Tipo de Código
            </Link>
          </li>
          <li>
            <Link to={"/js/teoria/clientServer"} className="link">
              Lado Cliente x Servidor
            </Link>
          </li>
          <li>
            <Link to={"/js/teoria/dinamicCode"} className="link">
              Código dinâmico
            </Link>
          </li>
          <li>
            <Link to={"/js/teoria/usingJS"} className="link">
              Utilizando no projeto
            </Link>
          </li>
          <li>
            <Link to={"/js/teoria/dom"} className="link">
              Entendendo o DOM
            </Link>
          </li>
        </ul>
        <li>
          <Link to={"/js/challenge"} className="link">
            Modulo III - Desafio
          </Link>
        </li>
        <ul className="module3">
          
        </ul>
      </ul>
    </nav>
  );
}
