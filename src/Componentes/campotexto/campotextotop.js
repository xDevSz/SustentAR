/* eslint-disable react/react-in-jsx-scope */
import "./campotexto.css";

const CampoTextoTop = (props) => {
  const { texto } = props;

  return (
    <div className="CampoTextoTop">
      <p>{texto}</p>
    </div>
  );
};

export default CampoTextoTop;
