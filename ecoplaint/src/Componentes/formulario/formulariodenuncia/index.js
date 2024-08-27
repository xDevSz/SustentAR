import React, { useState } from "react";
import CampoTextoTop from "../../campotexto/campotextotop";
import AdicionarImagem from "../../adicionarimagem";
import BtnDenuncia from "../../botao/botaodenuncia";
import ListaSuspensa from "../../listasuspensa";
import ManterAnonimo from "../../manteranonimo";
import Notificacao from "../../notificacoes";
import Localizacao from "../../localizacao";
import "../formulario.css";
import axios from 'axios';

const FormularioDenuncia = () => {
  const [imagem, setImagem] = useState(null);
  const [erro, setErro] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [reset, setReset] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Queimadas Ambientais");
  const [localizacao, setLocalizacao] = useState(null);

  const apiUrl = 'http://localhost:5001/api/denuncia';

  const aoEnviar = async (evento) => {
    evento.preventDefault();
  
    if (!localizacao) {
      setErro("Por favor, adicione uma localização.");
      return;
    }
  
    const dadosDenuncia = new FormData();
  
    if (imagem) {
      console.log('Imagem antes do envio:', imagem);
      dadosDenuncia.append('imagens', imagem); // Apenas a primeira imagem
    } else {
      console.error("Nenhuma imagem foi selecionada");
    }
  
    dadosDenuncia.append('opcaoSelecionada', opcaoSelecionada);
    dadosDenuncia.append('localizacao', JSON.stringify(localizacao));
    dadosDenuncia.append('manterAnonimo', false);
    dadosDenuncia.append('usuarioId', 1);
  
    try {
      const token = localStorage.getItem('token');
const response = await axios.post(apiUrl, dadosDenuncia, {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`,
  },
});


      console.log('Resposta do servidor:', response.data);
      setConfirmacao("Sua denúncia foi enviada!");
      setImagem(null);
      setReset(true);
      setTimeout(() => setReset(false), 0);
      setTimeout(() => setConfirmacao(""), 6000);
    } catch (error) {
      console.error('Erro ao enviar denúncia:', error.response ? error.response.data : error.message);
      setErro('Erro ao enviar denúncia.');
    }
  };
  
  

  return (
    <section className="formulario">
      <form onSubmit={aoEnviar}>
        <CampoTextoTop texto="Faça sua denúncia" />
        <AdicionarImagem aoSelecionar={setImagem} reset={reset} />
        <ListaSuspensa onSelect={setOpcaoSelecionada} />
        <ManterAnonimo />
        <Localizacao onChange={setLocalizacao} />
        <Notificacao mensagem={erro} tipo="erro" onClose={() => setErro("")} />
        <Notificacao mensagem={confirmacao} tipo="confirmacao" onClose={() => setConfirmacao("")} />
        <BtnDenuncia type="submit">Enviar Denúncia</BtnDenuncia>
      </form>
    </section>
  );
};

export default FormularioDenuncia;
