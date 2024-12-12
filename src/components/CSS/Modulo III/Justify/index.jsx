import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Justificar() {
  const [flex, setFlex] = useState("");

  const handleChange = (event) => {
    const textoRecebido = event.target.value;

    const textoCortado = textoRecebido.replace(/\s+/g, "");

    const regex = /justify-content:([^;]*);/;
    const match = textoCortado.match(regex);
    const updatedString = match ? match[1] : "";

    const answers = [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "start",
      "end",
      "left",
      "right",
      "stretch",
    ];

    if (answers.includes(updatedString)) {
      setFlex(updatedString);
    } else {
      setFlex("flex-start");
    }
  };

  let listaTexto = [
    "A propriedade 'justify-content' realiza o espaçamento dos itens dentro do nosso elemento, podendo ser feita de diferentes formas, space-around (espaço ao redor dos elementos), space-between(espaço entre os elementos), entre outros.",
    "Esta propriedade combinada com a propriedade de align-items, alinha os nossos elementos de forma simples e automática dentro da página.",
    "Você pode alterar os espaços entre as caixas abaixo utilizando as propriedades do display flex. Você pode achá-las no manual da MDN ou testar algumas como: space-between, space-around, space-evenly e center.",
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
              <p>{`.minha-div {`}</p>
              <p className="tabulado1">{`display: flex;`}</p>
              <input
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
              <p>{`}`}</p>
            </div>
            <div className="result">
              <p className="exemplo-css-7" style={{ justifyContent: flex }}>
                <p className="quadrado1"></p>
                <p className="quadrado2"></p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
