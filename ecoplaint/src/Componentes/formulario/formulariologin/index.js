import React, { useState } from "react";
import "../formulario.css";
import Botao from "../../botao";
import Inputs from "../../inputs";
import CriarConta from "../../criarconta";
import EsqueceuSenha from "../../esqueceusenha";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const aoSalvar = async (evento) => {
    evento.preventDefault();
    
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }
    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    setErro("");

    try {
      const response = await axios.post('http://localhost:5001/api/login', { 
        email: email,
        senha: senha
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Resposta do servidor: ", response.data);
      navigate("/TelaInicial");
    } catch (error) {
      console.error("Erro ao fazer login: ", error.response ? error.response.data : error.message);
      setErro("E-mail ou senha incorretos.");
    }
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
        <CriarConta /> {/* Não envolva isso em outro <Link> */}
        <EsqueceuSenha /> {/* Não envolva isso em outro <Link> */}
      </form>
    </section>
  );
};

export default FormularioLogin;
