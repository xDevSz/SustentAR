import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../formulario.css";
import CampoTexto from "../../campotexto";
import Iconenotificacao from "../../iconenotificacao"; // Certifique-se de que o caminho esteja correto

const FormularioNotificacoes = () => {
  const [notificacoes, setNotificacoes] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchNotificacoes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/notificacoes/todas');
        console.log('Resposta da API de notificações:', response.data);
        setNotificacoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar notificações:', error);
        setErro('Erro ao buscar notificações');
      }
    };

    fetchNotificacoes();
  }, []);

  return (
    <section className="formulario">
      <form>
        <CampoTexto texto="Notificações" />
        {erro && (
          <Iconenotificacao 
            titulo="Erro" 
            descricao={erro} 
          />
        )}
        {notificacoes.map((notificacao, index) => (
          <Iconenotificacao 
            key={index} 
            titulo={notificacao.noti_tipo_notificacao} 
            descricao={notificacao.noti_mensagem} 
          />
        ))}
      </form>
    </section>
  );
};

export default FormularioNotificacoes;
