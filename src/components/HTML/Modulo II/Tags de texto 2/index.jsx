import React, { useState } from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../TextArea";

import "./style.css"

export default function ModificationTags() {
  const [resultado, setResultado] = useState("");
  const handleChange = (event) => {
    const textoRecebido = event.target.value;

    const answers = [
      "<strong>marcar</strong>",
      "<em>marcar</em>",
      "<del>marcar</del>",
      "<ins>marcar</ins>",
    ];

    if (answers.includes(textoRecebido)) {
      setResultado(textoRecebido);
    } else {
      setResultado("");
    }
  };
  let listaTexto = [
    "Algumas outras tags que são utilizadas, são as tags semânticas, como <strong> que torna o texto dentro dela em negrito, sinalizando que é um texto importante.",
    "Outra tag é a tag <em> que siginifica ênfase, onde enfatizamos a palavra ou frase dentro da tag.",
    "Existem algumas outras tags como por exemplo a tag <del> que sinaliza que um texto foi deletado, utilizada em preços que sofreram alterações devido a descontos, por exemplo, também há a tag <ins> para texto que foi inserido na página, não é comumente utilizada, mas pode ser útil em sites contendo notícias ou artigos.",
    "Utilize uma das tags para modificar a palavra 'marcar'."
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
              <p className="tabulado1">{`<p>`}</p>
              <input className="input-tabulado"
                type="text"
                name="input-comando"
                id="input-comando"
                onChange={handleChange}
              />
              <p className="tabulado1">{`</p>`}</p>
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
