/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../TextArea";

import "./style.css"

export default function HyperlinkTags() {
  let listaTexto = [
    "Outra parte importante do HTML são os links, que são caracterizados pela tag <a>, que representa como se fosse uma âncora para outros lugares, ela pode redirecionar o usuário para outra página, para a mesma página ou para partes('tags') diferentes do documento HTML.",
    "Dentro do link utilizamos algumas propriedades, 'href' indica qual url estamos referenciando dentro do nosso site, podemos também referenciar sites externos",
    "Abaixo temos dois exemplos de links, o primeiro nos redireciona para a página atual, o segundo irá abrir uma nova página com a url do google. A propriedade 'target = _blank' significa que desejamos abrir o link em uma nova aba do navegador."
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
              <p className="tabulado1">{`<a href="" >Link aqui</a>`}</p>
              <p className="tabulado1">{`<a href="https://www.google.com" target="_blank">Link aqui</a>`}</p>
              <p>{`</div>`}</p>
            </div>
            <div className="result">
              <div>
              <a href="">Link para a mesma página</a>
              <a href="https://www.google.com" target="_blank">Link para o Google</a>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
