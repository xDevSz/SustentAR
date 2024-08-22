import React, { useState } from "react";
import "../formulario.css";
import Botao from "../../botao";
import Inputs from "../../inputs";
import JaPossui from "../../japossui";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Importe o axios

const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const aoSalvar = async (evento) => {
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

    setErro(""); // Limpar mensagens de erro

    try {
      // Fazendo a requisição POST para o backend
      const response = await axios.post('http://localhost:5001/api/cadastrar', { 
        nome: nome,
        email: email,
        senha: senha
      }, {
        headers: {
          'Content-Type': 'application/json' // Especificar o tipo de conteúdo
        }
      });

      console.log("Resposta do servidor: ", response.data);

      // Redirecionar para a página inicial após a validação bem-sucedida
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar: ", error.response ? error.response.data : error.message);
      setErro("Ocorreu um erro ao cadastrar. Tente novamente.");
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
        <Botao type="submit">CADASTRO</Botao>
        <Link to="/" className="link-sem-decoracao">
          <JaPossui />
        </Link>
      </form>
    </section>
  );
};

export default FormularioCadastro;
