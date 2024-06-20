import React, { useEffect } from 'react';
import './notificacoes.css';

const Notificacao = ({ mensagem, tipo, onClose }) => {
  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [mensagem, onClose]);

  if (!mensagem) return null;

  const getImageSrc = () => {
    return tipo === 'erro' ? '/Imagens/Erro.png' : '/Imagens/Notificação.png';
  };

  return (
    <div className={`notificacao ${tipo}`}>
      <img src={getImageSrc()} alt={tipo} className="notificacao-icon" />
      <span className="notificacao-text" dangerouslySetInnerHTML={{ __html: mensagem }}></span>
    </div>
  );
};

export default Notificacao;
