import React, { useState } from 'react';
import './adicionarimagem.css';

const AdicionarImagem = (props) => {
  const { texto } = props;
  const [file, setFile] = useState(null);
  const [registroAdicionado, setRegistroAdicionado] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    // Verifica se o arquivo é uma imagem
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setRegistroAdicionado(true); // Define o registro como adicionado ao selecionar um arquivo
    } else {
      alert('Por favor, selecione um arquivo de imagem.');
    }
  };

  return (
    <div className="AdicionarImagem">
      {/* Renderiza a imagem pré-definida ou a imagem carregada */}
      <img src={file ? URL.createObjectURL(file) : "/Imagens/Adicionar.png"} alt="Imagem" className={`file-image ${file ? '' : 'default-image'}`} />
      {/* Input de arquivo */}
      <input type="file" className="file-input" onChange={handleFileChange} accept="image/*" />
      {/* Renderiza uma mensagem indicando que o registro foi adicionado */}
      <p className="file-text">{registroAdicionado ? "Registro adicionado!" : "Adicione seu registro"}</p>
    </div>
  );
};

export default AdicionarImagem;
