import React from "react";
import { Link } from "react-router-dom";
import "./criarconta.css"; // Supondo que tenha um arquivo CSS próprio

const CriarConta = () => {
  return (
    <div className="CriarConta">
      <Link to="/TelaCadastro" className="link-sem-decoracao">
        Criar uma conta
      </Link>
    </div>
  );
};

export default CriarConta;
