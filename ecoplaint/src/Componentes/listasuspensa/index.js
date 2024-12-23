// ListaSuspensa.jsx
import React, { useState } from 'react';
import './listasuspensa.css';
import DetalhesDenuncia from '../detalhesdenuncia';

const ListaSuspensa = ({ onSelect }) => {
  const options = [
    "Queimadas Ambientais",
    "Garimpo Ilegal",
    "Pesca - Caça Ilegal",
    "Desmatamento",
    "Outro"
  ];

  const preSelectedOption = "Queimadas Ambientais"; // Opção pré-selecionada

  const [selectedOption, setSelectedOption] = useState(preSelectedOption);
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionClick = (option) => {
    if (option === "Outro") {
      setShowPopup(true);
    } else {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option); // Passa a opção selecionada para o componente pai
    }
  };

  const toggleDropdown = (event) => {
    event.preventDefault(); // Evita a atualização da página
    setIsOpen(!isOpen);
  };

  const handleConfirmarDetalhes = (detalhes) => {
    setSelectedOption(`Outro - ${detalhes}`);
    setShowPopup(false);
    onSelect(`Outro - ${detalhes}`);
  };

  const handleCancelarDetalhes = () => {
    setShowPopup(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {selectedOption || "Selecione uma Opção"}
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {options.filter(option => option !== selectedOption).map((option, index) => (
              <div
                key={index}
                className={`dropdown-item ${index % 2 === 0 ? 'even' : 'odd'}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {showPopup && (
        <DetalhesDenuncia 
          onConfirm={handleConfirmarDetalhes}
          onCancel={handleCancelarDetalhes}
        />
      )}
    </div>
  );
};

export default ListaSuspensa;
