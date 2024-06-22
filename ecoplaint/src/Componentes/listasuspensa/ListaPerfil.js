// ListaPerfil.jsx
import React, { useState } from 'react';
import './listasuspensa.css';

const ListaPerfil = ({ titulo, opcoes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (event) => {
    event.preventDefault();  // Previne a atualização da página
    setIsOpen(!isOpen);
  };

  return (
    <div className="perfil-section">
      <button className="perfil-titulo" onClick={toggleOpen}>
        {titulo}
      </button>
      {isOpen && (
        <div className="perfil-opcoes">
          {opcoes.map((opcao, index) => (
            <div key={index} className="perfil-opcao">
              {opcao}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaPerfil;
