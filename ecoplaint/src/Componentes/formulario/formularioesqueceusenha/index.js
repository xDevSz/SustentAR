import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link do react-router-dom
import "../formulario.css";

import Botao from "../../botao";
import Inputs from "../../inputs";

const TelaEsqueceuSenha = () => {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false); // Para exibir uma mensagem de sucesso após o envio do formulário

  const aoEnviar = (evento) => {
    evento.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }

    // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação de senha
    // Por exemplo, uma chamada de API para enviar o e-mail com o link de redefinição de senha
    // Após o envio bem-sucedido, você pode definir sucesso como true e exibir uma mensagem para o usuário

    // Simulando sucesso por enquanto
    console.log("E-mail enviado para:", email); // Mensagem no console
    setSucesso(true);
    setErro("");
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
