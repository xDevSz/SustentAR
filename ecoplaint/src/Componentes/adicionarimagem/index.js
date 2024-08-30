import React, { useState, useEffect } from 'react';
import Compressor from 'compressorjs';
import './adicionarimagem.css';

const AdicionarImagem = ({ aoSelecionar, reset }) => {
  const [imagemPreviews, setImagemPreviews] = useState([]);
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    if (reset) {
      setImagemPreviews([]);
      setImagens([]);
    }
  }, [reset]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 4 - imagens.length); // Limita a seleção a até 4 arquivos
    const previews = [];
    const newImages = [];

    files.forEach((file) => {
      new Compressor(file, {
        quality: 0.8,
        success(result) {
          const previewUrl = URL.createObjectURL(result);
          previews.push(previewUrl);
          newImages.push(result);

          if (previews.length === files.length) {
            setImagemPreviews(prev => [...prev, ...previews]);
            setImagens(prev => [...prev, ...newImages]);
          }
        },
        error(err) {
          console.error('Erro ao comprimir a imagem:', err);
        },
      });
    });
  };

  useEffect(() => {
    aoSelecionar(imagens); // Passa todas as imagens comprimidas para o componente pai
  }, [imagens]);

  return (
    <div className="AdicionarImagem">
      <div className="image-preview">
        {imagemPreviews.length > 0 ? (
          imagemPreviews.map((previewUrl, index) => (
            <img src={previewUrl} alt={`Preview ${index + 1}`} key={index} className="file-image" />
          ))
        ) : (
          <img src="/Imagens/Adicionar.png" alt="Adicionar Imagem" className="file-image default-image" />
        )}
      </div>
      <input
        type="file"
        className="file-input"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        key={reset ? 'reset' : 'default'}
      />
      <p className="file-text">Adicionar Imagens (até 4)</p>
    </div>
  );
};

export default AdicionarImagem;
