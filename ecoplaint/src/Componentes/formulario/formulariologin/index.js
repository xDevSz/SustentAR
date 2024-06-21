import React, { useState } from "react";
import "../formulario.css";

import Botao from "../../botao";
import Inputs from "../../inputs";
import CriarConta from "../../criarconta";
import EsqueceuSenha from "../../esqueceusenha";
import { useNavigate, Link } from 'react-router-dom'; // Importe o useNavigate e Link

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate(); // Hook para controle de navegação

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

    // Redirecionar para a página inicial após a validação bem-sucedida
    navigate("/TelaInicial");
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
        {erro && <p className="erro">{erro}</p>}
        <Botao type="submit">LOGIN</Botao>
        <Link to="/TelaCadastro" className="link-sem-decoracao">
          <CriarConta />
        </Link>
        <Link to="/TelaEsqueceuSenha" className="link-sem-decoracao">
          <EsqueceuSenha />
        </Link>
      </form>
    </section>
  );
};

export default FormularioLogin;
