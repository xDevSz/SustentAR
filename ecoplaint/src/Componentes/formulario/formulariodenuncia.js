import React, { useState } from "react";
import "./formulario.css";
import CampoTextoTop from "../campotexto/campotextotop";
import AdicionarImagem from "../adicionarimagem";
import BtnDenuncia from "../botao/botaodenuncia";
import ListaSuspensa from "../listasuspensa";
import ManterAnonimo from "../manteranonimo";

const FormularioDenuncia = () => {
  const [imagem, setImagem] = useState(null);
  const [erro, setErro] = useState("");

  const aoEnviar = (evento) => {
    evento.preventDefault();
    if (!imagem) {
      setErro("Por favor, adicione uma imagem para enviar a denúncia.");
      return;
    }
    console.log("Formulário de denúncia enviado => ", imagem);
    setErro("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoEnviar}>
        <CampoTextoTop texto="Faça sua denúncia" />
        <AdicionarImagem aoSelecionar={(imagem) => setImagem(imagem)} />
        <ListaSuspensa />
        <ManterAnonimo />
        {erro && <p className="erro">{erro}</p>}
        <BtnDenuncia type="submit">Enviar Denúncia</BtnDenuncia>
      </form>
    </section>
  );
};

export default FormularioDenuncia;
