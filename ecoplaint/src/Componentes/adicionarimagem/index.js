import React, { useState, useEffect } from 'react';
import './adicionarimagem.css';

const AdicionarImagem = ({ aoSelecionar, reset }) => {
  const [imagemPreview, setImagemPreview] = useState(null);

  useEffect(() => {
    if (reset) {
      setImagemPreview(null);
    }
  }, [reset]);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Seleciona apenas o primeiro arquivo
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagemPreview(previewUrl);
      aoSelecionar(file); // Passa apenas o arquivo único
    }
  };

  return (
    <div className="AdicionarImagem">
      <div className="image-preview">
        {imagemPreview ? (
          <img src={imagemPreview} alt="Preview" className="file-image" />
        ) : (
          <img src="/Imagens/Adicionar.png" alt="Adicionar Imagem" className="file-image default-image" />
        )}
      </div>
      <input
        type="file"
        className="file-input"
        accept="image/*"
        onChange={handleImageChange}
        key={reset ? 'reset' : 'default'} // Força o reset do input
      />
      <p className="file-text">Adicionar Imagem</p>
    </div>
  );
};

export default AdicionarImagem;
