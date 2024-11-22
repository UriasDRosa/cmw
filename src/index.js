import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/globals.css";

import Home from "./components/Home";
import SelectionScreen from "./components/Selection_Screen";
import HTML from "./components/HTML";
import CSS from "./components/CSS";
import JS from "./components/JS";
import IntroTags from "./components/HTML/Introducao as Tags";
import MainTags from "./components/HTML/Principais Tags";
import HeaderTags from "./components/HTML/Principais Tags/Tags de cabecalho";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/selection" element={<SelectionScreen />}></Route>
        <Route exact path="/html" element={<HTML />}></Route>
        <Route exact path="/html/introTags" element={<IntroTags />}></Route>
        <Route exact path="/html/mainTags" element={<MainTags />}></Route>
        <Route exact path="/html/mainTags/headerTags" element={<HeaderTags />}></Route>
        <Route exact path="/css" element={<CSS />}></Route>
        <Route exact path="/js" element={<JS />}></Route>
        <Route path="*" element="Página não encontrada"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
