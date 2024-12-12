import React from "react";

import "./style.css";

import Header from "../Home/Header/component-header";
import Navigation from "./Navigation";
import TextArea from "./TextArea";

export default function HTML() {
  const listaTexto = [
    "O HTML é uma linguagem de marcação, utilizada principalmente para construir a estrutura dos sites, com ela você pode criar parágrafos, tabelas, listas, imagens e outros elementos que compõem um site.",
    "Uma das partes mais importantes do HTML é a semântica do site, que auxilia muitas vezes para pessoas que possuem algum tipo de deficiência.",
  ];

  return (
    <>
      <Header />
      <main className="conteudo">
        <Navigation />
        <div className="conteudo-principal">
          <TextArea listaTexto={listaTexto} />
          <div className="exercicio">
            <div className="code"></div>
            <div className="result"></div>
          </div>
        </div>
      </main>
    </>
  );
}
