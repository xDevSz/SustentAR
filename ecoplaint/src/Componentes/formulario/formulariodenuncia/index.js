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
  const [imagens, setImagens] = useState([]); // Agora é um array para múltiplas imagens
  const [erro, setErro] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [reset, setReset] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Queimadas Ambientais");
  const [localizacao, setLocalizacao] = useState(null);
  const [anonimo, setAnonimo] = useState(false); // Estado para anonimato

  const apiUrl = 'https://backend-bice-beta.vercel.app/api/login';

  const aoEnviar = async (evento) => {
    evento.preventDefault();
  
    if (!localizacao) {
      setErro("Por favor, adicione uma localização.");
      return;
    }
  
    // Log para verificar as imagens antes de enviar
    console.log('Imagens selecionadas:', imagens);
  
    const dadosDenuncia = new FormData();
  
    if (imagens.length > 0) {
      imagens.forEach((imagem, index) => {
        console.log(`Imagem ${index + 1} antes do envio:`, imagem);
        dadosDenuncia.append('imagens', imagem); // Adiciona cada imagem ao campo 'imagens'
      });
    } else {
      console.error("Nenhuma imagem foi selecionada");
    }
  
    dadosDenuncia.append('opcaoSelecionada', opcaoSelecionada);
    dadosDenuncia.append('localizacao', JSON.stringify(localizacao));
    dadosDenuncia.append('manterAnonimo', anonimo);
  
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
      setImagens([]);
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
        <AdicionarImagem aoSelecionar={setImagens} reset={reset} /> {/* Recebe todas as imagens selecionadas */}
        <ListaSuspensa onSelect={setOpcaoSelecionada} />
        <ManterAnonimo onChange={setAnonimo} /> {/* Certifique-se de que isso funciona corretamente */}
        <Localizacao onChange={setLocalizacao} />
        <Notificacao mensagem={erro} tipo="erro" onClose={() => setErro("")} />
        <Notificacao mensagem={confirmacao} tipo="confirmacao" onClose={() => setConfirmacao("")} />
        <BtnDenuncia type="submit">Enviar Denúncia</BtnDenuncia>
      </form>
    </section>
  );
};

export default FormularioDenuncia;
