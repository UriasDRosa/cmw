import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Padding() {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = (event) => {
    const textoRecebido = event.target.value;
    const textoCortado = textoRecebido.replace(/\s+/g, "");
    console.log(textoCortado);

    const answers = [".bloco-externo{padding:10px0px0px10px;}"];

    if (answers.includes(textoCortado)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  let listaTexto = [
    "Padding é o espaçamento interno ao elemento, geralmente usamos padding para deixar um espaço entre o conteúdo e as bordas, por exemplo.",
    "Utilize a propriedade padding para distanciar o bloco interno 10 pixels do bloco externo, SOMENTE na parte esquerda e superior. Utilize o seletor de classe para a classe *bloco-externo*.",
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
              <p>{`div {`}</p>
              <p className="tabulado1">{`background-color: #04151F;`}</p>
              <p className="tabulado1">{`margin: 20px 0px 0px 20px;`}</p>
              <p>{`}`}</p>
              <input
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
            </div>
            <div className="result result-ex-4">
              <p
                className="exemplo-css-4 bloco-externo"
                style={{ padding: isCorrect ? "10px 0px 0px 10px" : "0" }}
              >
                <p className="bloco-interno"></p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
