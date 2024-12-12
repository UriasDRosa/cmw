import React, { useState } from "react";

import "./style.css";

import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default function TextArea({ listaTexto }) {
  let [texto, setTexto] = useState(listaTexto[0]);
  const [index, setIndex] = useState(0);

  texto = listaTexto[index];
  const handleClickLeft = (event) => {
    if (index > 0) {
      const newIndex = index - 1;
      setIndex(newIndex);
      setTexto(listaTexto[newIndex]);
    }
    return;
  };
  const handleClickRight = (event) => {
    if (index < listaTexto.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      setTexto(listaTexto[newIndex]);
    }
    return;
  };

  return (
    <>
      <div className="texto">
        <GoChevronLeft className="seta" onClick={handleClickLeft} />
        <p>{texto}</p>
        <GoChevronRight className="seta" onClick={handleClickRight} />
      </div>
    </>
  );
}
