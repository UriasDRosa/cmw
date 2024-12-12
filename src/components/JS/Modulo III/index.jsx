import React from "react";

import Header from "../../Home/Header/component-header";
import Navigation from "..//Navigation";
import TextArea from "../../HTML/TextArea";

import "./style.css";

export default function Challenge() {
  const listaTexto = [
    "Após realizar a leitura e compreensão dos conteúdos e exercícios disponibilizados na plataforma, você já é capaz de criar algumas páginas simples, utilizando os conhecimentos de HTML, CSS e JavaScript. Como um desafio especial para este módulo, tente criar uma landing page simples, utilizando alguns dos conceitos e itens abordados dirante os módulos.",
    "Um exemplo de landing page está disponível neste link do github na pasta 'Desafio', fique à vontade para tentar realizá-lo. https://github.com/UriasDRosa/cmw"
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
