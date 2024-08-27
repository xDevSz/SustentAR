import React, { useState } from 'react';
import './adicionarimagem.css'; // Verifique se o caminho está correto

const AdicionarImagem = ({ aoSelecionar, reset }) => {
  const [imagemPreview, setImagemPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagemPreview(URL.createObjectURL(file)); // Atualiza a pré-visualização
      aoSelecionar(file); // Passa o arquivo diretamente
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
