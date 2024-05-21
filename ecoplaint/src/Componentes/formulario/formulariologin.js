import React, { useState } from "react";
import "./formulario.css";

import Botao from "../botao";
import Inputs from "../inputs";
import CriarConta from "../criarconta";
import EsqueceuSenha from "../esqueceusenha";

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }
    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    console.log("Form foi submetido => ", email, senha);
    setErro("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <Inputs
          obrigatorio={true}
          placeholder="E-MAIL"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
          tipo="email"
        />
        <Inputs
          obrigatorio={true}
          placeholder="SENHA"
          valor={senha}
          aoAlterado={(valor) => setSenha(valor)}
          tipo="password"
        />
        {erro && <p className="erro">{erro}</p>} <Botao>LOGIN</Botao>
        <CriarConta />
        <EsqueceuSenha />
      </form>
    </section>
  );
};
export default FormularioLogin;
