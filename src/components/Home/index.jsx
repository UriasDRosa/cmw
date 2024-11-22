import React from "react";

import "./style.css";

import Header from "./Header/component-header";
import Main from "./Main/component-main";

export default function Home() {
  return (
    <>
      <div className="container-flex">
        <Header />
        <Main />
      </div>
    </>
  );
}
