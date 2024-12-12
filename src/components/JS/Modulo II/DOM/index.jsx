import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function DOM() {
  const [isCorrect, setIsCorrect] = useState(false);

  
  const handleChange = (event) => {
    const textoRecebido = event.target.value;
    const textoCortado = textoRecebido.replace(/\s+/g, "");
    console.log(textoCortado)

    const answers = [
      `document.querySelector(".exemplo");`,
    ];

    if (answers.includes(textoCortado)) {
      setIsCorrect(true)
    } else {
    }
  };
  

  let listaTexto = [
    "O Modelo de Objeto de Documentos (do inglês Document Object Model, DOM) é uma API definida pelo W3C para representar e interagir com qualquer documento HTML ou XML. O DOM é um modelo de documento carregado pelo navegador. Este documento é representado através de uma árvore de nós, onde cada um destes nós representa uma parte do documento (por ex. um elemento, texto ou comentário).",
    "O DOM é uma das APIs mais usadas na Web porque ele permite que cada código rodando no navegador acesse e interaja com cada nó do documento. Os nós podem ser criados, movidos ou modificados. Listeners de evento podem também ser adicionados aos nós para serem disparados quando um dado evento ocorrer.",
    "Através da manipulação do DOM nós podemos utilizar os elementos presentes da nossa página HTML, desde a raiz dela até os elementos que foram adicionados posteriormente.",
    "Para capturar um elemento pelo JavaScript, geralmente utilizamos o comando 'document.' seguido por um seletor, existem diversos seletores para tipos diferentes de elementos, como seletores por id, classe e até mesmo tag. Atualmente o seletor mais comum e mais popular é o 'querySelector()', com ele podemos utilizar o mesmo prefixo do CSS, por exemplo, para capturar um elemento.",
    "Tente capturar o elemento com a classe 'exemplo' através do querySelector(). É importante que o conteúdo dentro dos '()' esteja entre aspas."
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
              <p>{`const exemplo = `} <input
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />{`;`}</p>
              
            <p>{`exemplo.style.backgroundColor = "#04151F";`}</p>
            </div>
            <div className="result">
              <p className="exemplo" style={{backgroundColor: isCorrect ?  "#04151F" : "none" }}></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
