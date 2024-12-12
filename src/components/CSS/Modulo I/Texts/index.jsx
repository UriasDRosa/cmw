import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function TextNFonts() {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = (event) => {
    const textoRecebido = event.target.value;
    const textoCortado = textoRecebido.replace(/\s+/g, "");
    console.log(textoCortado)

    const answers = [
      ".exemplo{font-family:monospace;}",
    ];

    if (answers.includes(textoCortado)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  let listaTexto = [
    "Outro uso importante do CSS é para a formatação de fontes e textos dentro da página, para isso geralmente utilizamos propriedades do CSS dos elementos iniciais do nosso documento, como o elemento HTML.",
    "Usamos a propriedade font-family para mudar a família da fonte e a propriedade font-size para mudar o tamanho das letras.",
    "Utilize um seletor CSS de classe para trocar a família da nossa classe *exemplo* para 'monospace'.",
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
              <p className="tabulado1">{`font-size: 20px;`}</p>
              <p>{`}`}</p>
              <input
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
            </div>
            <div className="result">
              <p
                className="exemplo-css-2"
                style={{ fontFamily: isCorrect ? "monospace" : "sans-serif" }}
              >
                Mude a minha família
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
