/* eslint-disable react/react-in-jsx-scope */
import FormularioDenuncia from "../Componentes/formulario/formulariodenuncia";
import LogoDireita from "../Componentes/logo/logodireita";

function TelaInicial() {
  return (
    <div className="TelaInicial">
      <LogoDireita/>
      <FormularioDenuncia />
    </div>
  );
}

export default TelaInicial;
