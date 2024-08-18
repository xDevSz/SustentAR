// DetalhesDenuncia.jsx
import React, { useState } from "react";
import "./detalhesdenuncia.css";

const DetalhesDenuncia = ({ onConfirm, onCancel }) => {
  const [detalhes, setDetalhes] = useState("");
  const maxChars = 75;

  const handleConfirmarClick = () => {
    if (detalhes.trim().length > 0) {
      onConfirm(detalhes);
    } else {
      alert("Por favor, insira os detalhes da denúncia.");
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Detalhar Denúncia</h3>
        <textarea
          value={detalhes}
          onChange={(e) => setDetalhes(e.target.value.slice(0, maxChars))}
          placeholder="Descreva o que aconteceu (máximo 75 caracteres)"
        />
        <div className="char-count">{detalhes.length}/{maxChars}</div>
        <div className="button-group">
          <button onClick={handleConfirmarClick}>Confirmar</button>
          <button onClick={onCancel} className="cancelar">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default DetalhesDenuncia;
