// AdicionarImagem.jsx
import React, { useState, useEffect } from 'react';
import './adicionarimagem.css';

const AdicionarImagem = (props) => {
  const { aoSelecionar, reset } = props;
  const [file, setFile] = useState(null);
  const [registroAdicionado, setRegistroAdicionado] = useState(false);

  useEffect(() => {
    if (reset) {
      setFile(null);
      setRegistroAdicionado(false);
    }
  }, [reset]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setRegistroAdicionado(true);
      aoSelecionar(selectedFile);
    } else {
      alert('Por favor, selecione um arquivo de imagem.');
    }
  };

  return (
    <div className="AdicionarImagem">
      <img src={file ? URL.createObjectURL(file) : "/Imagens/Adicionar.png"} alt="Imagem" className={`file-image ${file ? '' : 'default-image'}`} />
      <input type="file" className="file-input" onChange={handleFileChange} accept="image/*" />
      <p className="file-text">{registroAdicionado ? "Registro adicionado!" : "Adicione seu registro"}</p>
    </div>
  );
};

export default AdicionarImagem;
