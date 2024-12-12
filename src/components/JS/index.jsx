import React from "react";

import Header from "../Home/Header/component-header";
import Navigation from "./Navigation";
import TextArea from "../HTML/TextArea";

import "./style.css";

export default function JS() {
  const listaTexto = [
    "O JavaScript também conhecido como JS é uma linguagem de programação que permite a você implementar itens complexos em páginas web, toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática, mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.",
    "Caso você não tenha uma noção prévia sobre lógica de programação, recomendo que procure algum conteúdo relacionado a ela antes de iniciar o módulo, o objetivo desta plataforma é te ensinar o básico sobre a linguagem JavaScript.",
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
