import React from "react";
import { Link } from "react-router-dom"; 
import "../formulario.css";

import Botao from "../../botao";

const TelaEsqueceuSenha = () => {
  return (
    <section className="formulario">
      <div className="conteudo-centralizado">
        <h2>Esqueceu sua senha?</h2>
        <p>Em caso de perda de senha, entre em contato com este email: sustentnar@gmail.com</p>
        <p>Ou se preferir, <Link to="/anonimo" className="link-sem-decoracao">entre como anônimo</Link>.</p>
        <Link to="/" className="link-sem-decoracao">
          <Botao>LOGIN</Botao>
        </Link>
      </div>
    </section>
  );
};

export default TelaEsqueceuSenha;
