/* eslint-disable react/react-in-jsx-scope */
// BotaoDireita.js
import "./botao.css";

const BotaoDireita = (props) => {
  return (
    <div className="Direita">
      <button className="BotaoDireita">
        {props.children}
        <img src="/Imagens/Chat.png" alt="Chat" className="icone"/>
      </button>
      <div className="TextoBotao">Chat</div>
    </div>
  );
};

export default BotaoDireita;
