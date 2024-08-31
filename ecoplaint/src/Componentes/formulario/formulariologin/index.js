import React, { useState } from "react";
import "../formulario.css";
import Botao from "../../botao";
import Inputs from "../../inputs";
import CriarConta from "../../criarconta";
import EsqueceuSenha from "../../esqueceusenha";
import EntrarAnonimo from "../../entraranonimo"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);  // Estado de carregamento

  const navigate = useNavigate();

  const aoSalvar = async (evento) => {
    evento.preventDefault();
    setLoading(true);  // Inicia o carregamento
    
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

    setErro("");

    try {
      const response = await axios.post('https://backend-bice-beta.vercel.app/api/login', { 
        email: email,
        senha: senha
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Resposta do servidor: ", response.data);

      // Armazena o token JWT no localStorage
      localStorage.setItem('token', response.data.token);
      if (localStorage.getItem('token')) {
        console.log('Token salvo com sucesso');
      } else {
        console.error('Falha ao salvar o token');
      }

      navigate("/TelaInicial");
    } catch (error) {
      console.error("Erro ao fazer login: ", error.response ? error.response.data : error.message);
      setErro("E-mail ou senha incorretos.");
    } finally {
      setLoading(false);  // Termina o carregamento após o login, com sucesso ou erro
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
        <Botao type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'LOGIN'}
        </Botao>
        <CriarConta />
        <EsqueceuSenha />
        <EntrarAnonimo />
      </form>
    </section>
  );
};

export default FormularioLogin;
