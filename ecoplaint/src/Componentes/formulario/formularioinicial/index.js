import React from 'react';
import "../formulario.css";
import CampoTexto from "../../campotexto";
import Mapa from "../../mapa";
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
        {/* Botão de Notificações removido */}
        <Link to="/TelaGrafico" className="link-sem-decoracao">
          <CampoTexto texto="Gráfico" />
        </Link>
        {/* Removido o botão "Perfil" do formulário */}
        <Rodape />
      </form>
    </section>
  );
};

export default FormularioInicial;

