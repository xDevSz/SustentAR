// AdicionarImagem.jsx
import React, { useState, useEffect } from 'react';
import './adicionarimagem.css';

const AdicionarImagem = (props) => {
  const { aoSelecionar, reset } = props;
  const [files, setFiles] = useState([]);
  const [registroAdicionado, setRegistroAdicionado] = useState(false);

  useEffect(() => {
    if (reset) {
      setFiles([]);
      setRegistroAdicionado(false);
    }
  }, [reset]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));

    if (imageFiles.length > 0) {
      const newFiles = [...files, ...imageFiles].slice(0, 4); // Limita a 4 imagens
      setFiles(newFiles);
      setRegistroAdicionado(true);
      aoSelecionar(newFiles);
    } else {
      alert('Por favor, selecione arquivos de imagem.');
    }
  };

  const renderImages = () => {
    return files.map((file, index) => (
      <img key={index} src={URL.createObjectURL(file)} alt={`Imagem ${index + 1}`} className="file-image" />
    ));
  };

  return (
    <div className="AdicionarImagem">
      <div className="image-preview">
        {files.length > 0 ? renderImages() : <img src="/Imagens/Adicionar.png" alt="Adicionar Imagem" className="file-image default-image" />}
      </div>
      <input type="file" className="file-input" onChange={handleFileChange} accept="image/*" multiple />
      <p className="file-text">{registroAdicionado ? "Registro(s) adicionado(s)!" : "Adicione seus registros"}</p>
    </div>
  );
};

export default AdicionarImagem;
