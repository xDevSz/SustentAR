import React from "react";
import "./index.css";


const Iconenotificacao = (props) => {
  return (
    <div className="iconebox">
      <div className="image">

      <img src="/Imagens/Logo.png" alt="Logo do ecoplaint" className="foto" />
      </div>

      <div className="content">

        <div className="titulo">{props.titulo}</div>

        <div className="descricao">{props.descricao}</div>
      </div>
    </div>
  );
};

export default Iconenotificacao;
