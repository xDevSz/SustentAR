import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const EntrarAnonimo = () => {
  return (
    <div className="EntrarAnonimo">
      <label>
        <Link to="/TelaDenuncia" className="link-sem-decoracao">
          Entrar Anonimamente
        </Link>
      </label>
    </div>
  );
};

export default EntrarAnonimo;
