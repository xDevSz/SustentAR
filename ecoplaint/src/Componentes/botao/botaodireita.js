/* eslint-disable react/react-in-jsx-scope */
// BotaoDireita.js
import "./botao.css";

const BotaoDireita = (props) => {
  return (
    <div className="Direita">
      <button className="BotaoDireita">
        {props.children}
        <img src="/Imagens/Chat3.png" alt="Chat" className="icone"/>
      </button>
      <div className="TextoBotao">
        Contatos
      </div>
    </div>
  );
};

export default BotaoDireita;
