import React from "react";

import Header from "../../../Home/Header/component-header";
import Navigation from "../../Navigation";
import TextArea from "../../../HTML/TextArea";

import "./style.css";

export default function Documents() {
  
  let listaTexto = [
    "O JavaScript é inserido nas páginas web de uma maneira similar ao CSS, porém ao invés de utilizar '<link>' para as folhas de estilo, o JavaScript faz uso do elemento HTML '<script></script>'.",
    "Também é possível adicionar JavaScript dentro do código através de arquivos externos, desta vez utilizando o elemento <script src='caminho do arquivo .js'></script>.",
    "Boas práticas na hora de implementar o JavaScript, é utilizar nomes de arquivos padrão, como por exemplo 'index.js' ou 'global.js', além disso, é importante separar o código em arquivos menores, para tornar o entendimento e usabilidade melhor."
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
              <p>{`<script src="/js/index.js"></script>`}</p>
            </div>
            <div className="result">
             
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
