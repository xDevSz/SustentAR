// FormularioPerfil.jsx
import React from "react";
import "../formulario.css";
import CampoTexto from "../../campotexto";
import Perfil from "../../perfil";
import ListaPerfil from "../../listasuspensa/ListaPerfil";
import Sair from "../../botao/sair"

const FormularioPerfil = () => {
  const perfilOptions = ["Editar Perfil", "Mudar Foto", "Alterar Senha"];
  const idiomaOptions = ["Português", "Inglês", "Espanhol"];
  const privacidadeOptions = ["Configurações de Privacidade", "Segurança da Conta"];
  const notificacoesOptions = ["Email", "SMS", "Push Notifications"];
  const suporteOptions = ["Contato", "FAQs", "Reportar um Problema"];

  return (
    <section className="formulario">
      <form>
        <CampoTexto texto="Perfil" />
        <Perfil />
        <ListaPerfil titulo="Minha Conta" opcoes={perfilOptions} />
        <ListaPerfil titulo="Idioma" opcoes={idiomaOptions} />
        <ListaPerfil titulo="Privacidade e Segurança" opcoes={privacidadeOptions} />
        <ListaPerfil titulo="Notificações" opcoes={notificacoesOptions} />
        <ListaPerfil titulo="Suporte" opcoes={suporteOptions} />
        <Sair type="submit">SAIR</Sair>
      </form>
    </section>
  );
};

export default FormularioPerfil;
