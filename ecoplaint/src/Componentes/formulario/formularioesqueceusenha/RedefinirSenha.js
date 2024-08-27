import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const RedefinirSenha = () => {
  const { token } = useParams(); // Pega o token da URL
  const [novaSenha, setNovaSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const aoEnviar = async (evento) => {
    evento.preventDefault();

    if (novaSenha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ senha: novaSenha })
      });

      if (response.ok) {
        setSucesso(true);
        setErro("");
      } else {
        setErro("Erro ao redefinir a senha. Tente novamente.");
      }
    } catch (error) {
      console.error('Erro:', error);
      setErro("Erro ao redefinir a senha. Verifique sua conexão.");
    }
  };

  return (
    <section className="formulario">
      {!sucesso ? (
        <form onSubmit={aoEnviar}>
          <h2>Redefinir sua senha</h2>
          <input
            type="password"
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          {erro && <p className="erro">{erro}</p>}
          <button type="submit">Redefinir Senha</button>
        </form>
      ) : (
        <div>
          <p>Sua senha foi redefinida com sucesso!</p>
          <Link to="/login">Ir para Login</Link>
        </div>
      )}
    </section>
  );
};

export default RedefinirSenha;
