import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../formulario.css";

import Botao from "../../botao";
import Inputs from "../../inputs";

const TelaEsqueceuSenha = () => {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const aoEnviar = async (evento) => {
    evento.preventDefault();
    
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }
  
    try {
      // Fazendo uma chamada para a API de recuperação de senha
      const response = await fetch('http://localhost:5001/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
  
      if (response.ok) {
        setSucesso(true);
        setErro("");
      } else {
        setErro("Erro ao enviar e-mail de recuperação. Tente novamente.");
      }
    } catch (error) {
      console.error('Erro:', error);
      setErro("Erro ao enviar e-mail. Verifique sua conexão.");
    }
  };
  
  

  return (
    <section className="formulario">
      {!sucesso ? (
        <form onSubmit={aoEnviar}>
          <h2>Esqueceu sua senha?</h2>
          <p>Insira seu e-mail abaixo para recuperar sua senha.</p>
          <Inputs
            obrigatorio={true}
            placeholder="E-MAIL"
            valor={email}
            aoAlterado={(valor) => setEmail(valor)}
            tipo="email"
          />
          {erro && <p className="erro">{erro}</p>}
          <Botao>ENVIAR</Botao>
        </form>
      ) : (
        <div>
          <p className="sucesso">
            Um e-mail de recuperação foi enviado para {email}
          </p>
          <Link to="/" className="link-sem-decoracao">
            <Botao>LOGIN</Botao>
          </Link>
        </div>
      )}
    </section>
  );
};

export default TelaEsqueceuSenha;
