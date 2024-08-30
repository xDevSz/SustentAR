import React, { useState } from 'react';
import './manteranonimo.css';

const ManterAnonimo = ({ onChange }) => {
  const [anonimo, setAnonimo] = useState(false);

  const handleToggleAnonimo = () => {
    const novoEstado = !anonimo;
    setAnonimo(novoEstado);
    onChange(novoEstado); // Passa o novo estado para o componente pai
  };

  return (
    <div className="container">
      <div className="ManterAnonimo">
        <label>
          <input
            type="checkbox"
            checked={anonimo}
            onChange={handleToggleAnonimo}
            className="checkbox-input"
          />
          <span className="checkbox-label">Manter-se Anônimo</span>
        </label>
      </div>
    </div>
  );
};

export default ManterAnonimo;
