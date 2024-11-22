import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function Navigation() {
  return (
    <nav className="menu-lateral">
      <h1>HTML</h1>
      <ul className="list-content">
        <li><Link to={'/html'} className="link">Modulo I - Introdução</Link></li>
        <ul className="module1">
          <li><Link to={'/html/introTags'} className="link">Introdução as tags</Link></li>
        </ul>
        <li><Link to={'/html/mainTags'} className="link">Modulo II - Principais tags</Link></li>
        <ul className="module2">
          <li><Link to={'/html/mainTags/headerTags'} className="link">Tags de cabeçalho</Link></li>
          <li>Tags de texto</li>
          <li>Tags de modificação</li>
          <li>Hiperlinks</li>
          <li>Tabelas</li>
          <li>Listas</li>
        </ul>
        <li>Modulo III - Estrutura</li>
      </ul>
    </nav>
  );
}
