import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../TextArea";

import "./style.css";
export default function HeaderTags() {
  const [resultado, setResultado] = useState("");
  const handleChange = (event) => {
    const textoRecebido = event.target.value;

    const answers = [
      "<h1>Hello World!</h1>",
      "<h2>Hello World!</h2>",
      "<h3>Hello World!</h3>",
      "<h4>Hello World!</h4>",
      "<h5>Hello World!</h5>",
      "<h6>Hello World!</h6>",
    ];

    if (answers.includes(textoRecebido)) {
      setResultado(textoRecebido);
    } else {
      setResultado("");
    }
  };

  let listaTexto = [
    "As tags <h1> a <h6> são utilizadas para adicionar cabeçalhos de títulos e subtítulos a página, sendo que <h1> é um título de maior importância e <h6> um de menor importância.",
    "Utilize as tags de título para criar um título com o conteúdo 'Hello World!'",
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
              <p>{`<div>`}</p>
              <input
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
              <p>{`</div>`}</p>
            </div>
            <div className="result">
              <div dangerouslySetInnerHTML={{ __html: resultado }}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
