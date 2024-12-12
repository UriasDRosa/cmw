import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Margin() {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = (event) => {
    const textoRecebido = event.target.value;
    const textoCortado = textoRecebido.replace(/\s+/g, "");
    console.log(textoCortado)

    const answers = [
      "#bloco{margin:20px;}",
    ];

    if (answers.includes(textoCortado)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  let listaTexto = [
    "Margin é o espaço de um elemento em relação a outros elementos, como se fosse uma distanciação do resto. Podemos usar a medida de pixels para controlar a margem, ou simplesmente adicionar o valor auto, para que ela se ajuste automaticamente.",
    "Utilize a propriedade margin para distanciar o bloco destacado 20 pixels do resto, em todas as bordas. Utilize o seletor de id para o elemento 'bloco', o prefixo do seletor é '#' ."
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
              <p>{`}`}</p>
              <input
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
            </div>
            <div className="result result-ex-3">
              <p
                className="exemplo-css-3"
                style={{ margin: isCorrect ? "20px" : "0" }}
              >
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
