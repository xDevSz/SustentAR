import React, { useState } from "react";
import "../formulario.css";

import Botao from "../../botao";
import Inputs from "../../inputs";
import JaPossui from "../../japossui";
import { useNavigate, Link } from 'react-router-dom'; // Importe o useNavigate e Link

const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate(); // Hook para controle de navegação

  const aoSalvar = (evento) => {
    evento.preventDefault();
    if (nome.trim() === "") {
      setErro("Insira um nome");
      return;
    }
    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    if (senha !== confSenha) {
      setErro("As senhas não coincidem.");
      return;
    }
    console.log("Form foi submetido => ", nome, email, senha);
    setErro("");

    // Redirecionar para a página inicial após a validação bem-sucedida
    navigate("/");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <Inputs
          obrigatorio={true}
          placeholder="NOME"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
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
          tipo="password"
          aoAlterado={(valor) => setSenha(valor)}
        />
        <Inputs
          obrigatorio={true}
          placeholder="CONFIRMAR SENHA"
          valor={confSenha}
          tipo="password"
          aoAlterado={(valor) => setConfSenha(valor)}
        />
        {erro && <p className="erro">{erro}</p>}
        <Botao type="submit">CADASTRO</Botao>
        <Link to="/" className="link-sem-decoracao">
          <JaPossui />
        </Link>
      </form>
    </section>
  );
};

export default FormularioCadastro;
