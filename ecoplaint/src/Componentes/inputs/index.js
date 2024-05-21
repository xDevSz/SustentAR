/* eslint-disable react/react-in-jsx-scope */
import "./inputs.css";

const Inputs = (props) => {
  const { aoAlterado, valor, obrigatorio, placeholder, tipo } = props;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="Inputs">
      <input
        type={tipo}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputs;
