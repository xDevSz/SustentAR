/* eslint-disable react/react-in-jsx-scope */
// BotaoCentral.js
import "./botao.css";
import { Link } from 'react-router-dom'

const BotaoCentral = (props) => {
  return (
    <div className="Central">
      <Link to="/TelaDenuncia">
      <button className="BotaoCentral">
          {props.children}
        <img src="/Imagens/Denúncia.png" alt="Chat" className="icone" />
      </button>
      </Link>
      <div className="TextoBotao">Denúncia</div>
    </div>
  );
};

export default BotaoCentral;
