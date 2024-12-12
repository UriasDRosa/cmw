import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Align() {
  const [flex, setFlex] = useState("");

  const handleChange = (event) => {
    const textoRecebido = event.target.value;

    const textoCortado = textoRecebido.replace(/\s+/g, "");

    const regex = /align-items:([^;]*);/;
    const match = textoCortado.match(regex);
    const updatedString = match ? match[1] : "";

    const answers = [
      "stretch",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "start",
      "end",
      "self-start",
      "self-end",
    ];

    if (answers.includes(updatedString)) {
      setFlex(updatedString);
    } else {
      setFlex("flex-start");
    }
  };

  let listaTexto = [
    "A propriedade 'align-items' é utilizada para realizar o alinhamento vertical dos elementos, na maioria dos casos queremos que o texto ou o bloco fique no centro, então usamos a propriedade center, porém há várias outras possibilidades para serem usadas em diferentes tipos de layout.",
    "Você pode alterar o posicionamento das caixas abaixo utilizando as propriedades do display flex. Você pode achá-las no manual da MDN ou testar algumas como: flex-end, flex-start, stretch e center.",
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
              <p className="exemplo-css-8" style={{ alignItems: flex }}>
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
