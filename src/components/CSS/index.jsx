import React from "react";

import Header from "../Home/Header/component-header";
import Navigation from "./Navigation";
import TextArea from "../HTML/TextArea";

import "./style.css";

export default function CSS() {
  const listaTexto = [
    "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilização usada em documentos escritos em HTML ou em XML.",
    "O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
    "Para utilizar CSS na sua página, pode criar um arquivo .css no projeto e depois referencia-lo no HTML, através do código '<link rel=arquivo.css />'."
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
