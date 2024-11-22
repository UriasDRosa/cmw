import React from "react";

import { Link } from "react-router-dom"
import "./style.css"

export default function Main(){
    return(
        <main>
          <div className="welcome">
            <h1>Bem-vindo ao criando minha Web!</h1>
            <p>
              Para você que deseja aprender um pouco sobre o desenvolvimento web
            </p>
          </div>
          <div className="whoim">
            <h1>Quem somos?</h1>
            <p>
              O Criando minha Web é um projeto para auxiliar programadores
              iniciantes a aprenderem o básico do Desenvolvimento Web
            </p>
          </div>
          <div className="content">
            <h1>Nosso conteúdo</h1>
            <p>
              Aqui você vai aprender os principais conteúdos básicos necessários
              para você começar a desenvolver sites por conta própria como
              HTML5, CSS3 e Javascript
            </p>
          </div>
          <Link to="/selection" className="link"><button className="start">Começe agora</button></Link>
        </main>
    )
}