/* eslint-disable react/react-in-jsx-scope */
import "../formulario.css";
import CampoTexto from "../../campotexto";
//import { Link } from 'react-router-dom';

const FormularioNotificacoes = () => {
  return (
    <section className="formulario">
      <form>
          <CampoTexto texto="Notificações" />
      </form>
    </section>
  );
};

export default FormularioNotificacoes;
