import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../TextArea";

import "./style.css";

export default function ListTags() {
  const [resultado, setResultado] = useState("");
  const handleChange = (event) => {
    const textoRecebido = event.target.value;

    const answers = [
      "<li>Leite</li>",
    ];

    if (answers.includes(textoRecebido)) {
      setResultado(textoRecebido);
    } else {
      setResultado("");
    }
  };
  let listaTexto = [
    "As listas no HTML são muito usadas para criar menus, classificar conteúdo dentro do site e organizar itens.",
    "As listas são divididas em dois tipos, as listas ordenadas, representadas pela tag <ol> e as listas não ordenadas, representadas pela tag <ul>, nas duas listas os itens da lista são representados pela tag <li>.",
    "Adicione um novo item chamado 'Leite' na lista."
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
              <p className="tabulado1">{`<ul>`}</p>
              <p className="tabulado2">{`<li>Café</li>`}</p>
              <p className="tabulado2">{`<li>Chá</li>`}</p>
              <input className="tabulado1"
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
              <p className="tabulado1">{`</ul>`}</p>
              <p>{`</div>`}</p>
            </div>
            <div className="result">
                <ul>
                    <li>Café</li>
                    <li>Chá</li>
                    <div dangerouslySetInnerHTML={{__html:resultado}}></div>
                </ul>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
