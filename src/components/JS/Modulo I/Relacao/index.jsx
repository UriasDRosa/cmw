import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Relacao() {
  let [textoRecebido, setTextoRecebido] = useState("");

  const atualizarNome = () =>{
    const nome = prompt("Insira seu nome")
    setTextoRecebido(nome);
  }

  let listaTexto = [
    "Quando vamos falar à respeito das tecnologias da web, existem três principais que compõem a sua base, sendo elas HTML, CSS e por fim o JavaScript.",
    "HTML é a linguagem de marcação que nós usamos para estruturar e dar significado para o nosso conteúdo web. Por exemplo, definindo parágrafos, cabeçalhos, tabelas de conteúdo, ou inserindo imagens e vídeos na página.",
    "CSS é uma linguagem de regras de estilo que nós usamos para aplicar estilo ao nosso conteúdo HTML. Por exemplo, definindo cores de fundo e fontes, e posicionando nosso conteúdo em múltiplas colunas.",
    "JavaScript é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de interessante.",
    "Para exemplificar melhor como as três são relacionadas, abaixo você pode encontrar uma caixa e ao clicar nela poderá inserir seu nome como jogador. Isso será feito utilizando JavaScript.",
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
            <div className="result">
              <p onClick={atualizarNome} className="jogador-exemplo">{textoRecebido ? `Jogador 1: ${textoRecebido}` : "Jogador 1: Gabriel"} </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
