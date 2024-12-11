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
          <li><Link to={'/html/mainTags/textTags'} className="link">Tags de texto</Link></li>
          <li><Link to={'/html/mainTags/modificationTags'} className="link">Tags de modificação</Link></li>
          <li><Link to={'/html/mainTags/hyperlinkTags'} className="link">Hiperlinks</Link></li>
          <li><Link to={'/html/mainTags/tableTags'} className="link">Tabelas</Link></li>
          <li><Link to={'/html/mainTags/listTags'} className="link">Listas</Link></li>
        </ul>
        <li><Link to={'/html/structureTags'} className="link">Modulo III - Estrutura</Link></li>
      </ul>
    </nav>
  );
}
