/* eslint-disable react/react-in-jsx-scope */
import "./formulario.css";
import CampoTexto from "../campotexto";
import Mapa from "../mapa";
import Rodape from "../rodape";

const FormularioInicial = () => {
  return (
    <section className="formulario">
      <form>
        <CampoTexto texto="Localização" />
        <Mapa />
        <CampoTexto texto="Notificações" />
        <CampoTexto texto="Gráfico" />
        <Rodape/>
      </form>
    </section>
  );
};

export default FormularioInicial;
