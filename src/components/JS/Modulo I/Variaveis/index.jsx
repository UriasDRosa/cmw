import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Variaveis() {
  let [textoRecebido, setTextoRecebido] = useState("");

  const atualizarNome = () =>{
    const nome = prompt("Insira seu nome")
    setTextoRecebido(nome);
  }

  let listaTexto = [
    "Dentro do JavaScript nós utilizamos variáveis para declarar valores, objetos, vetores entre outros. As variáveis de JavaScript são fracamente tipadas, ou seja, não possuem um tipo como em outras linguagens de programação, como por exemplo o C++.",
    "Os principais tipos de variáveis no JS são três, 'const' são as variáveis constantes, isso significa que seu valor não irá ser alterado depois de declarado. Os outros dois tipos são as variáveis 'let' e 'var' que se assemelham em alguns aspectos, os dois tipos podem atribuir diferentes tipos e valores durante o código.",
    "O tipo 'var' possui escopo global ou de função, ela pode ser redeclarada e ter seus valores atualziados a qualquer momento dentro do seu escopo.",
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
              <p>{`const texto = "Eu sou um texto que não muda";`}</p>
              <p>{`var global = "Eu posso ser acessada em qualquer lugar";`}</p>
              <p>{`function funcao(){`}</p>
              <p className="tabulada1">{`let local = "Eu só posso ser acessada dentro da função";`}</p>
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
