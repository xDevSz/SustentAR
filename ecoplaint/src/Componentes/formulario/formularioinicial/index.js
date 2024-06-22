import React from 'react';
import "../formulario.css";
import CampoTexto from "../../campotexto";
import Mapa from "../../mapa";
import TelaGrafico from '../../../Telas/TelaGrafico';
import Rodape from "../../rodape";
import { Link } from 'react-router-dom';

const FormularioInicial = () => {
  return (
    <section className="formulario">
      <form>
        <Link to="/TelaMapa" className="link-sem-decoracao">
          <CampoTexto texto="Localização" />
          <Mapa />
        </Link>
        <Link to="/TelaNotificacoes" className="link-sem-decoracao">
          <CampoTexto texto="Notificações" />
        </Link>
        <Link to="/TelaGrafico" className="link-sem-decoracao">
          <CampoTexto texto="Gráfico" />
        </Link>
        <Rodape />
      </form>
    </section>
  );
};

export default FormularioInicial;
