import React from "react";

import Header from "../../Home/Header/component-header";
import Navigation from "../Navigation";
import TextArea from "../TextArea";

export default function IntroTags() {
  let listaTexto = [
    "A construção do HTML de um site é feita através das tags, elas possuem dois tipos, as tags de abertura, representadas por “<>” e as tags de fechamento, representadas por “</>”. Fazemos uso das tags para adicionar itens dentro do nosso documento HTML.",
  ];
  return (
    <>
      <Header />
      <main className="conteudo">
        <Navigation />
        <div className="conteudo-principal">
          <TextArea listaTexto={listaTexto} />
          <div className="exercicio">
            <div className="code"></div>
            <div className="result"></div>
          </div>
        </div>
      </main>
    </>
  );
}
