import React from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

export default function Usability() {
    
      let listaTexto = [
        "Assim como o HTML, o CSS não é realmente uma linguagem de programação. Também não é uma linguagem de marcação — é uma linguagem de estilização.",
        " Isso significa que o CSS permite aplicar estilos seletivamente a elementos em documentos HTML."
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
            </div>
            <div className="result">
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
