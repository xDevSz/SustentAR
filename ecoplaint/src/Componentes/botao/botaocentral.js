/* eslint-disable react/react-in-jsx-scope */
// BotaoCentral.js
import "./botao.css";

const BotaoCentral = (props) => {
  return (
    <div className="Central">
      <button className="BotaoCentral">
          {props.children}
        <img src="/Imagens/Denúncia.png" alt="Chat" className="icone" />
      </button>
      <div className="TextoBotao">Denúncia</div>
    </div>
  );
};

export default BotaoCentral;
