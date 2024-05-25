/* eslint-disable react/react-in-jsx-scope */
import "./rodape.css";
import BotaoEsquerda from "../botao/botaoesquerda";
import BotaoCentral from "../botao/botaocentral";
import BotaoDireita from "../botao/botaodireita";

const Rodape = () => {
  return (
    <footer className="rodape">
      <BotaoEsquerda />
      <BotaoCentral />
      <BotaoDireita />
    </footer>
  );
};

export default Rodape;
