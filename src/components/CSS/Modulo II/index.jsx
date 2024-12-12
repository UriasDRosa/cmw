import React from "react";

import Header from "../../Home/Header/component-header";
import Navigation from "../Navigation";
import TextArea from "../../HTML/TextArea";

import "./style.css";

export default function Spacing() {
  let listaTexto = [
    "Dentro do HTML, cada elemento que possuímos representa basicamente uma caixa, onde nela vêm definidos alguns valores padrão, esses valores geralmente são os valores margin e padding.",
    "Cada elemento do HTML possui por padrão algum valor pré estabelecido, através do CSS nós podemos retirar estes valores padrões e criar nosso próprio estilo, deixando os elementos de uma maneira mais bem organizada.",
    "Caso você tenha feito o módulo anterior de HTML, poderá perceber que a maior parte dos exercícios utilizou o CSS para sua construção.",
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
