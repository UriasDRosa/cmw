import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Sizing() {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = (event) => {
    const textoRecebido = event.target.value;
    const textoCortado = textoRecebido.replace(/\s+/g, "");
    console.log(textoCortado);

    const answers = [
      "width:50px;",
    ];

    if (answers.includes(textoCortado)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  let listaTexto = [
    "Dentro do CSS, possuímos algumas propriedades para alterar o tamanho dos elementos na página, usamos width(largura) e height(altura) para controlar o tamanho dos elementos. Dentro de cada uma dessas propriedades, nos temos diversos tipos de medidas diferentes.",
    "A mais comum é o pixel, representada por “px”, depois temos vw e vh, que respectivamente representam a largura e altura da viewport, que basicamente é o quanto a sua tela possui de pixels em largura e altura.",
    "Também possuímos outras medidas que geram mais responsividade mas também são um pouco mais complexas, é possível acessar a documentação da MDN e conhecê-las melhor.",
    "Utilize a propridade width para ajustar a largura da nossa div em 50 pixels.",
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
              <p className="tabulado1">{`height: 50px;`}</p>
              <input
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
              <p className="tabulado1">{`background-color: #04151F;`}</p>
              <p>{`}`}</p>
            </div>
            <div className="result">
              <p
                className="exemplo-css-6"
                style={{ width: isCorrect ? "50px" : "0" }}
              ></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
