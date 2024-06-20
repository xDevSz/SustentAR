/* eslint-disable react/react-in-jsx-scope */
import "../formulario.css";
import CampoTexto from "../../campotexto";
import Mapa from "../../mapa";
import Rodape from "../../rodape";
import { Link } from 'react-router-dom';

const FormularioPlaceHolder = () => {
  return (
    <section className="formulario">
      <form>
        <Link to="/TelaMapa" className="link-sem-decoracao">
          <CampoTexto texto="Localização" />
          <Mapa />
        </Link>
        <Rodape />
      </form>
    </section>
  );
};

export default FormularioPlaceHolder;
