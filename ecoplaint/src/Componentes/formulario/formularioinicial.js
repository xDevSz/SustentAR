/* eslint-disable react/react-in-jsx-scope */
import "./formulario.css";
import CampoTexto from "../campotexto";
import Mapa from "../mapa";

const FormularioInicial = () => {
  return (
    <section className="formulario">
      <form>
        <CampoTexto texto="Localização" />
        <Mapa />
        <CampoTexto texto="Notificações" />
        <CampoTexto texto="Gráfico" />
      </form>
    </section>
  );
};

export default FormularioInicial;
