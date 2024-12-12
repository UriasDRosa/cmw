import React from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../TextArea";

import "./style.css";

export default function TextTags() {
  let listaTexto = [
    "Quando vamos escrever texto no HTML, a tag mais comum utilizada é a tag <p>, onde dentro dela escrevemos o texto que queremos adicionar ao site, como por exemplo “<p>Hello World</p>”.",
    "A tag “p” é útil quando queremos escrever trechos de texto no site, mas existem outros tipos de tags com finalidades semelhantes, algumas delas são as tags <article>,<span> e <code>.",
    "Elas são usadas para adicionar textos com um modelo específico dentro do site, article é usado para adicionar textos em formato de artigo, onde é um conteúdo independente ao site.",
    "A tag span são textos genéricos, que geralmente são escritos para posteriormente serem estilizados ou que não possuem tanta relevância dentro do site, essa tag não possui uma semântica boa, então pode representar qualquer coisa.",
    "Por fim temos a tag code que é usada quando queremos adicionar trechos de código ao site.",
  ];
  return (
    <>
      <Header />
      <main className="conteudo">
        <Navigation />
        <div className="conteudo-principal">
          <TextArea listaTexto={listaTexto} />
          <div className="exercicio">
            <div className="code">
              <p>{`<div>`}</p>
              <p className="tabulado1">{`<h1>Aqui está o título do meu site</h1>`}</p>
              <p className="tabulado1">{`<p>Aqui está escrito um parágrafo referente ao meu título</p>`}</p>
              <p className="tabulado1">{`<span>Aqui está escrito um texto genérico, sem semântica</span>`}</p>
              <p>{`</div>`}</p>
            </div>
            <div className="result-text-tags">
              <h1>Aqui está o título do meu site</h1>
              <p>Aqui está escrito um parágrafo referente ao meu título</p>
              <span>Aqui está escrito um texto genérico, sem semântica</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
