/* eslint-disable react/react-in-jsx-scope */
import "./campotexto.css";

const CampoTexto = (props) => {
  const { texto } = props;

  return (
    <div className="CampoTexto">
      <p>{texto}</p>
    </div>
  );
};

export default CampoTexto;
