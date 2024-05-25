// BotaoEsquerda.js
import "./botao.css";

const BotaoEsquerda = (props) => {
  return (
    <div className="Esquerda">
      <button className="BotaoEsquerda">
        {props.children}
        <img src="/Imagens/Usuário.png" alt="Chat" className="icone" />
      </button>
      <div className="TextoBotao">Perfil</div>
    </div>
  );
};

export default BotaoEsquerda;
