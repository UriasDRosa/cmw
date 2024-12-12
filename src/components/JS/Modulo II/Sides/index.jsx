import React from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function ClientServer() {
 

  let listaTexto = [
    "Você pode também ouvir os termos lado do servidor (server-side) e lado do cliente (client-side), especialmente no contexto de desenvolvimento web. Códigos do lado do cliente são executados no computador do usuário — quando uma página web é visualizada, o código do lado do cliente é baixado, executado e exibido pelo navegador. Todos os códigos e exercícios da plataforma são relacionados ao lado do cliente.",
    "Códigos do lado do servidor, por outro lado, são executados no servidor e o resultado da execução é baixado e exibido no navegador. Exemplos de linguagens do lado do servidor populares incluem PHP, Python, Ruby, e ASP.NET. JavaScript também pode ser executado no lado servidor, através de ambientes como o Node.js, você pode encontrar mais sobre o Node.js e o lado servidor do JavaScript na documentação da MDN."
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
            <div className="result">
             
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
