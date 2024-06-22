// src/components/TelaGrafico/index.js
import React from 'react';
import './index.css';

const TelaGrafico = () => {
    return (
        <div className="tela-grafico">
            <h1>Painel Gráfico</h1>
            <iframe
                src="https://terrabrasilis.dpi.inpe.br/queimadas/bdqueimadas/"
                width="100%"
                height="700px"
                style={{ border: 'none' }}
                title="Painel do Fogo"
            ></iframe>
        <div className="espaco-verde"></div>
        </div>
        
    );
};

export default TelaGrafico;
