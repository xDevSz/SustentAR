import React, { useState } from "react";
import "../formulario.css";
import Botao from "../../botao";
import Inputs from "../../inputs";
import JaPossui from "../../japossui";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(""); // Para mensagem de sucesso
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const navigate = useNavigate();

  const aoSalvar = async (evento) => {
    evento.preventDefault();
    setLoading(true);  // Inicia o carregamento
    
    if (nome.trim() === "") {
      setErro("Insira um nome");
      setLoading(false);  // Termina o carregamento em caso de erro
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      setLoading(false);  // Termina o carregamento em caso de erro
      return;
    }
    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      setLoading(false);  // Termina o carregamento em caso de erro
      return;
    }
    if (senha !== confSenha) {
      setErro("As senhas não coincidem.");
      setLoading(false);  // Termina o carregamento em caso de erro
      return;
    }

    setErro(""); // Limpar mensagens de erro
    setSucesso(""); // Limpar mensagem de sucesso

    try {
      const response = await axios.post('https://backend-bice-beta.vercel.app/api/cadastrar', { 
        nome: nome,
        email: email,
        senha: senha
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Resposta do servidor: ", response.data);

      setSucesso("Cadastro realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redireciona após 2 segundos

    } catch (error) {
      console.error("Erro ao cadastrar: ", error.response ? error.response.data : error.message);
      setErro("Ocorreu um erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);  // Termina o carregamento após o cadastro, com sucesso ou erro
    }
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
        {sucesso && <p className="sucesso">{sucesso}</p>} {/* Exibe a mensagem de sucesso */}
        <Botao type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'CADASTRO'}
        </Botao>
        <Link to="/" className="link-sem-decoracao">
          <JaPossui />
        </Link>
      </form>
    </section>
  );
};

export default FormularioCadastro;
