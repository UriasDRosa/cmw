import React from "react";

import Header from "../../Home/Header/component-header";
import Navigation from "../Navigation";
import TextArea from "../TextArea";

import "./style.css";

export default function StructureTags() {
  let listaTexto = [
    "Existem diversas tags que são usadas para estruturar a página, quando criamos nosso documento HTML, algumas tags de estrutura já são criadas, como a tag <html> e a tag <body>. ",
    "Elas são a base da estrutura do site, porém existem inúmeras outras tags que podem ser utilizadas dentro do corpo do documento, em sites comuns, as que são mais usadas são as tags <header>, para criar o cabeçalho, a tag <main> para ser o container onde será incluído o conteúdo principal da página e a tag <footer> para adicionar um rodapé ao documento.",
    "Também usamos outras tags como <section> para criar seções dentro da página de maneira mais semântica, e a tag <div> que é uma das tags mais utilizadas para criar divisões genéricas dentro de um site. Também há a tag <nav> que é utilizada para criar menus laterais e outros tipos de navegação dentro do site.",
    "No site criando minha Web, você pode ver o uso das tags <header> no menu superior e <nav> no menu lateral, assim como o texto que você está lendo pertence a um parágrafo dentro da tag <main>, por ser o conteúdo principal, porém não temos um rodapé na página, a maioria dos sites comerciais implementa um rodapé com informações de contato e links para acessar outros conteúdos.",
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
              <p>{`<body>`}</p>
              <p className="tabulado1">{`<header>Cabeçalho</header>`}</p>
              <p className="tabulado1">{`<nav>Navegação</nav>`}</p>
              <p className="tabulado1">{`<main>Conteúdo principal</main>`}</p>
              <p className="tabulado1">{`<footer>Rodapé</footer>`}</p>
              <p>{`</body>`}</p>
            </div>
            <div className="result-exemplo">
              <div className="cabecalho-exemplo">Cabecalho</div>
              <div className="nav-exemplo">Navegacao</div>
              <div className="main-exemplo">Principal</div>
              <div className="footer-exemplo">Rodape</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
