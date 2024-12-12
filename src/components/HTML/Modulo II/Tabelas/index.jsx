import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../TextArea";

import "./style.css";

export default function TableTags() {
  const [resultado, setResultado] = useState("");
  const handleChange = (event) => {
    const textoRecebido = event.target.value;

    const answers = ["<td>Laranja</td>", "<td>laranja</td>"];

    if (answers.includes(textoRecebido)) {
      setResultado(textoRecebido);
    } else {
      setResultado("");
    }
  };
  let listaTexto = [
    "As tabelas no HTML são compostas por algumas tags, a tag pai é a tag <table>, dentro dela podem se utilizar algumas outras tags, geralmente a tag subsequente de <table>, é a tag <tr>, que representa uma nova linha da tabela.",
    "Dentro da tag <tr> geralmente se utilizam duas outras tags, <th> que representa o cabeçalho de uma coluna e <td> que representa um dado dentro da tabela.",
    "Adicione uma nova fruta 'Laranja' dentro da segunda liha da tabela.",
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
              <p className="tabulado1">{`<table>`}</p>
              <p className="tabulado2">{`<tr>`}</p>
              <p className="tabulado3">{`<th>Frutas</th>`}</p>
              <p className="tabulado2">{`</tr>`}</p>
              <p className="tabulado2">{`<tr>`}</p>
              <p className="tabulado3">{`<td>Banana</td>`}</p>
              <p className="tabulado2">{`</tr>`}</p>
              <p className="tabulado2">{`<tr>`}</p>
              <input
                className="tabulado2"
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
              <p className="tabulado2">{`</tr>`}</p>
              <p className="tabulado1">{`</table>`}</p>
              <p>{`</div>`}</p>
            </div>
            <div className="result">
              <div>
                <table>
                  <tr>
                    <th>Frutas</th>
                  </tr>
                  <tr>
                    <td>Banana</td>
                  </tr>
                  <tr>
                    <div
                      className="exemplo-html-table"
                      dangerouslySetInnerHTML={{ __html: resultado }}
                    ></div>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
