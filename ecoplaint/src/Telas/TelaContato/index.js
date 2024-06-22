/* eslint-disable react/react-in-jsx-scope */
import Formulariocontato from "../../Componentes/formulario/formulariocontato";
import Logomenor from "../../Componentes/logo/logomenor";
import Rodape from "../../Componentes/rodape/";

function TelaContato() {
  return (
    <div className="TelaContato">
      <Logomenor/>
      <Rodape />
      <Formulariocontato />
    </div>
  );
}

export default TelaContato;
