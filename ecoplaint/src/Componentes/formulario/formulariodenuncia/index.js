// FormularioDenuncia.jsx
import React, { useState, useEffect } from "react";
import "../formulario.css";
import CampoTextoTop from "../../campotexto/campotextotop";
import AdicionarImagem from "../../adicionarimagem";
import BtnDenuncia from "../../botao/botaodenuncia";
import ListaSuspensa from "../../listasuspensa";
import ManterAnonimo from "../../manteranonimo";
import Notificacao from "../../notificacoes";
import { CSSTransition } from "react-transition-group";

const FormularioDenuncia = () => {
  const [imagem, setImagem] = useState(null);
  const [erro, setErro] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [reset, setReset] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Queimadas Ambientais"); // Opção padrão
  const [localizacao, setLocalizacao] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocalizacao({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.error("Geolocalização não é suportada pelo navegador.");
    }
  }, []);

  const aoEnviar = (evento) => {
    evento.preventDefault();
    if (!imagem) {
      setErro("<strong>Erro:</strong> Por favor, adicione uma imagem para enviar a denúncia.");
    } else {
      console.log("Formulário de denúncia enviado => ", {
        imagem,
        opcaoSelecionada,
        localizacao,
      });
      setErro("");
      setConfirmacao("<strong>Sua denúncia foi enviada!</strong> Enviaremos atualizações assim que possível.");
      setImagem(null); // Reset the image
      setReset(true);  // Trigger reset in child components
      setTimeout(() => setReset(false), 0); // Allow reset to complete before next interaction

      // Clear confirmation message after 6 seconds
      setTimeout(() => setConfirmacao(""), 6000);
    }
  };

  return (
    <section className="formulario">
      <form onSubmit={aoEnviar}>
        <CampoTextoTop texto="Faça sua denúncia" />
        <AdicionarImagem aoSelecionar={setImagem} reset={reset} />
        <ListaSuspensa onSelect={setOpcaoSelecionada} />
        <ManterAnonimo />
        <CSSTransition
          in={!!erro}
          timeout={300}
          classNames="slide-right"
          unmountOnExit
        >
          <Notificacao mensagem={erro} tipo="erro" onClose={() => setErro("")} />
        </CSSTransition>
        <CSSTransition
          in={!!confirmacao}
          timeout={300}
          classNames="slide-right"
          unmountOnExit
        >
          <Notificacao mensagem={confirmacao} tipo="confirmacao" onClose={() => setConfirmacao("")} />
        </CSSTransition>
        <BtnDenuncia type="submit" className="slide-down">Enviar Denúncia</BtnDenuncia>
      </form>
    </section>
  );
};

export default FormularioDenuncia;