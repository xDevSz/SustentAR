import React from "react";
import { Link } from "react-router-dom";
import "./esqueceusenha.css";

const EsqueceuSenha = () => {
  return (
    <div className="EsqueceuSenha">
      <label>
        <Link to="/TelaEsqueceuSenha" className="link-sem-decoracao">
          Esqueceu sua senha?
        </Link>
      </label>
    </div>
  );
};

export default EsqueceuSenha;
