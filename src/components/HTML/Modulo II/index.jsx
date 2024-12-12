import React from "react";

import Header from "../../Home/Header/component-header";
import Navigation from "../Navigation";
import TextArea from "../TextArea";

export default function MainTags() {
  let listaTexto = [
    "Algumas das principais tags e as mais utilizadas, são as tags que compõem o corpo do documento, geralmente são os cabeçalhos(títulos), parágrafos e tags para realizar as divisões de um documento.",
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
