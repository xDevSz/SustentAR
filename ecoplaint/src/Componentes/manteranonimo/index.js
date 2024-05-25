import React, { useState } from 'react';
import './manteranonimo.css';

const ManterAnonimo = () => {
  const [anonimo, setAnonimo] = useState(false);

  const handleToggleAnonimo = () => {
    setAnonimo(!anonimo);
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
