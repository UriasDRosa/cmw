import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Atribuition() {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = (event) => {
    const textoRecebido = event.target.value;
    const textoCortado = textoRecebido.replace(/\s+/g, "");
    console.log(textoCortado)

    const answers = [
      "p {color: #fff; }",
      "p{color: #fff; }",
      "p{color: #fff;}",
      "p{color:#fff;}",
    ];

    if (answers.includes(textoCortado)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  let listaTexto = [
    "No CSS, nós atribuímos estilos aos elementos do HTML através dos seletores, dentre eles nós temos vários tipos, os mais comuns sendo atribuição por id, classe e as tags propriamente ditas.",
    "Utilize um seletor para a tag <p> e atribua sua 'color' como '#fff'",
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
              <p className="tabulado1">{`background-color: black;`}</p>
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
                className="exemplo-css-1"
                style={{ color: isCorrect ? "#fff" : "#04151F" }}
              >
                Muito Bom
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
