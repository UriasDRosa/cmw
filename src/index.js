import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/globals.css";

import Home from "./components/Home";
import SelectionScreen from "./components/Selection_Screen";
import HTML from "./components/HTML";
import CSS from "./components/CSS";
import JS from "./components/JS";

// HTML MODULE

import IntroTags from "./components/HTML/Modulo I";
import MainTags from "./components/HTML/Modulo II";
import HeaderTags from "./components/HTML/Modulo II/Tags de cabecalho";
import TextTags from "./components/HTML/Modulo II/Tags de texto";
import ModificationTags from "./components/HTML/Modulo II/Tags de texto 2";
import HyperlinkTags from "./components/HTML/Modulo II/Hiperlinks";
import TableTags from "./components/HTML/Modulo II/Tabelas";
import ListTags from "./components/HTML/Modulo II/Listas";
import StructureTags from "./components/HTML/Modulo III";

// CSS MODULE

import Usability from "./components/CSS/Modulo I/Usabilidade";
import Atribuition from "./components/CSS/Modulo I/Atribuicao";
import TextNFonts from "./components/CSS/Modulo I/Texts";
import Spacing from "./components/CSS/Modulo II";
import Margin from "./components/CSS/Modulo II/Margin";
import Padding from "./components/CSS/Modulo II/Padding";
import Border from "./components/CSS/Modulo II/Border";
import Sizing from "./components/CSS/Modulo II/Sizing";
import FlexBox from "./components/CSS/Modulo III";
import Justificar from "./components/CSS/Modulo III/Justify";
import Align from "./components/CSS/Modulo III/Align";


// JS MODULE
import Relacao from "./components/JS/Modulo I/Relacao";
import Variaveis from "./components/JS/Modulo I/Variaveis";
import Ordem from "./components/JS/Modulo I/Ordem";
import Teoria from "./components/JS/Modulo II";
import Codes from "./components/JS/Modulo II/Codigo";
import ClientServer from "./components/JS/Modulo II/Sides";
import Dinamicidade from "./components/JS/Modulo II/Dinamicidade";
import Documents from "./components/JS/Modulo II/Documentos";
import DOM from "./components/JS/Modulo II/DOM";
import Challenge from "./components/JS/Modulo III";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/selection" element={<SelectionScreen />}></Route>

        {/* HTML ROUTER DOM */}
        <Route exact path="/html" element={<HTML />}></Route>
        <Route exact path="/html/introTags" element={<IntroTags />}></Route>
        <Route exact path="/html/mainTags" element={<MainTags />}></Route>
        <Route
          exact
          path="/html/mainTags/headerTags"
          element={<HeaderTags />}
        ></Route>
        <Route
          exact
          path="/html/mainTags/textTags"
          element={<TextTags />}
        ></Route>
        <Route
          exact
          path="/html/mainTags/modificationTags"
          element={<ModificationTags />}
        ></Route>
        <Route
          exact
          path="/html/mainTags/hyperlinkTags"
          element={<HyperlinkTags />}
        ></Route>
        <Route
          exact
          path="/html/mainTags/tableTags"
          element={<TableTags />}
        ></Route>
        <Route
          exact
          path="/html/mainTags/listTags"
          element={<ListTags />}
        ></Route>
        <Route
          exact
          path="/html/structureTags"
          element={<StructureTags />}
        ></Route>

        {/* CSS ROUTER DOM */}
        <Route exact path="/css" element={<CSS />}></Route>
        <Route exact path="/css/usingFor" element={<Usability />}></Route>
        <Route exact path="/css/howUsing" element={<Atribuition />}></Route>
        <Route exact path="/css/textFonts" element={<TextNFonts />}></Route>
        <Route exact path="/css/spacing" element={<Spacing />}></Route>
        <Route exact path="/css/spacing/margin" element={<Margin />}></Route>
        <Route exact path="/css/spacing/padding" element={<Padding />}></Route>
        <Route exact path="/css/spacing/border" element={<Border />}></Route>
        <Route exact path="/css/spacing/sizing" element={<Sizing />}></Route>
        <Route exact path="/css/flexBox" element={<FlexBox />}></Route>
        <Route exact path="/css/flexBox/justifyContent" element={<Justificar />}></Route>
        <Route exact path="/css/flexBox/AlignItems" element={<Align />}></Route>

        {/* CSS ROUTER DOM */}
        <Route exact path="/js" element={<JS />}></Route>
        <Route exact path="/js/relacao" element={<Relacao />}></Route>
        <Route exact path="/js/variaveis" element={<Variaveis />}></Route>
        <Route exact path="/js/ordem" element={<Ordem />}></Route>
        <Route exact path="/js/teoria" element={<Teoria />}></Route>
        <Route exact path="/js/teoria/codes" element={<Codes />}></Route>
        <Route exact path="/js/teoria/clientServer" element={<ClientServer />}></Route>
        <Route exact path="/js/teoria/dinamicCode" element={<Dinamicidade />}></Route>
        <Route exact path="/js/teoria/usingJS" element={<Documents />}></Route>
        <Route exact path="/js/teoria/dom" element={<DOM />}></Route>
        <Route exact path="/js/challenge" element={<Challenge />}></Route>


        <Route path="*" element="Página não encontrada"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
