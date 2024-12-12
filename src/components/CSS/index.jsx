import React from "react";

import Header from "../Home/Header/component-header";
import Navigation from "./Navigation";
import TextArea from "../HTML/TextArea";

import "./style.css";

export default function CSS() {
  const listaTexto = [
    "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilização usada em documentos escritos em HTML ou em XML.",
    "O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
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
