import React from "react";

import Header from "../../Home/Header/component-header";
import Navigation from "..//Navigation";
import TextArea from "../../HTML/TextArea";

import "./style.css";

export default function Teoria() {
  const listaTexto = [
    "Apesar do JavaScript ser uma linguagem bastante prática, é importante entenermos um pouco do seu funcionamento na teoria e de como ele opera no navegador. Este módulo trabalhará especificamente com conceitos teóricos relacionados ao JavaScript como uma linguagem de programação.",
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
