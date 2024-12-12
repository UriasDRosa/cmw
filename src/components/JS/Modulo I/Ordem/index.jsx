import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Ordem() {
  let [textoRecebido, setTextoRecebido] = useState("");

  const atualizarNome = () =>{
    const nome = prompt("Insira seu nome")
    setTextoRecebido(nome);
  }

  let listaTexto = [
    "Quando o navegador encontra um bloco de código JavaScript, ele geralmente executa na ordem, de cima para baixo. Isso significa que você precisa ter cuidado com a ordem na qual você coloca as coisas.",
    "Caso você queira utilizar uma variável antes de declará-la isso não irá funcionar, por exemplo.",
    "Abaixo está um pedaço do código do exercício anterior, preste atenção na ordem na qual as linhas são escritas.",
    "Já o tipo de variável 'let' não pode ser declarado novamente, seus valores podem ser atualizados mas somente dentro do escopo de bloco onde ela foi declarada, caso uma variável 'let' seja declarada dentro de uma função por exemplo, não poderá ser acessada fora da mesma.",
    "Abaixo você pode ver um exemplo de como algumas variáveis se comportam, o escopo de cada uma é importante para a maioria das aplicações, pois cada diferença trás um benefício diferente, seja em memória usada ou praticidade."
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
              <p>{`const botao = document.querySelector("p");`}</p>
              <p>{`botao.addEventListener("click", atualizarNome);`}</p>
              <p>{`function atualizarNome() {`}</p>
              <p className="tabulada1">{`let nome = prompt("Escreva seu nome:");`}</p>
              <p className="tabulada1">{`botao.textContent = "Jogador 1: " + nome;`}</p>
              <p>{`}`}</p>
            </div>
            <div className="result">
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
