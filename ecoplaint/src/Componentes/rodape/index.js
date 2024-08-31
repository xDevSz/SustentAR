import "./rodape.css";
import BotaoEsquerda from "../botao/botaoesquerda";
import BotaoCentral from "../botao/botaocentral";
import BotaoDireita from "../botao/botaodireita";
import { Link } from 'react-router-dom'

const Rodape = () => {
  const handlePerfilClick = (event) => {
    event.preventDefault(); // Impede a navegação para a tela de perfil
    alert("Função indisponível");
  };

  return (
    <footer className="rodape">
      <Link to="/TelaPerfil" className="link-sem-decoracao" onClick={handlePerfilClick}>
        <BotaoEsquerda />
      </Link>
      <Link to="/TelaDenuncia" className="link-sem-decoracao">
        <BotaoCentral />
      </Link>
      <Link to="/TelaContato" className="link-sem-decoracao">
        <BotaoDireita />
      </Link>
    </footer>
  );
};

export default Rodape;
