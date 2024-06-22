// src/components/TelaGrafico/index.js
import React from 'react';
import CampoTexto from "../..//Componentes/campotexto";
import './indexg.css'

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
             <div className="espaco-verde"></div>
        </div>

        
    );
};

export default TelaGrafico;
