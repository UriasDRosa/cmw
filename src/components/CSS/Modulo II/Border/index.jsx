import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Border() {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = (event) => {
    const textoRecebido = event.target.value;
    const textoCortado = textoRecebido.replace(/\s+/g, "");
    console.log(textoCortado);

    const answers = [
      "div{border:1pxsolidblack;}",
      "div{border:1pxsolid#000;}",
      "div{border:1pxsolid#000000;}",
    ];

    if (answers.includes(textoCortado)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  let listaTexto = [
    "Border é a borda do elemento, todos os elementos possuem uma borda, podemos usar algumas propriedades para fazer a borda aparecer ou simplesmente podemos retirar as bordas de alguns elementos.",
    "Na seção das tabelas em HTML, podemos ver o uso de bordas para separar as células da tabela, nativamente as tabelas no HTML não possuem uma cor ou tamanho em sua borda.",
    "As propriedades mais comuns do elemento 'border', são o tamanho, o estilo da linha e a cor.",
    "Utilize a propriedade border para adicionar uma borda de um pixel à nossa div, para este exercício utilize o estilo 'solid' e a cor preta para a borda.",
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
              <p className="tabulado1">{`height: 5rem;`}</p>
              <p className="tabulado1">{`width: 5rem;`}</p>
              <p className="tabulado1">{`background-color: white;`}</p>
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
                className="exemplo-css-5"
                style={{ border: isCorrect ? "1px solid black" : "none" }}
              ></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
