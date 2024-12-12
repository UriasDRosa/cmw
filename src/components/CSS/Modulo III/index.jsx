import React from "react";

import Header from "../../Home/Header/component-header";
import Navigation from "../Navigation";
import TextArea from "../../HTML/TextArea";

import "./style.css";

export default function FlexBox() {
  let listaTexto = [
    "Uma das partes mais importantes do CSS é como organizamos nossos elementos HTML dentro da página, para isso que o flexbox foi feito, utilizando a propriedade de “display: flex” no elemento pai, podemos organizar seus elementos filhos de modo flexível dentro do documento.",
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
