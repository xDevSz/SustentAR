// src/components/TelaGrafico/index.js
import React from 'react';
import './index.css';
import CampoTexto from "../..//Componentes/campotexto";

const TelaGrafico = () => {
    return (
        <div className="tela-grafico">
            <CampoTexto texto="Painel Gráfico" />
            <iframe
                src="https://terrabrasilis.dpi.inpe.br/queimadas/bdqueimadas/"
                width="100%"
                height="700px"
                style={{ border: 'none' }}
                title="Painel do Fogo"
            ></iframe>
        </div>
        
    );
};

export default TelaGrafico;
