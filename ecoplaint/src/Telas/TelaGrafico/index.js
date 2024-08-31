import React from 'react';
import CampoTexto from "../../Componentes/campotexto";
import './indexg.css';

const TelaGrafico = () => {
    return (
        <div className="tela-grafico">
            <div className="iframe-title">
                <CampoTexto texto="Painel Gráfico" />
            </div>
            <div className="iframe-container">
                <iframe
                    src="https://www.globalforestwatch.org/embed/map/?map=eyJkYXRhc2V0cyI6W3sib3BhY2l0eSI6MC43LCJ2aXNpYmlsaXR5Ijp0cnVlLCJkYXRhc2V0IjoicHJpbWFyeS1mb3Jlc3RzIiwibGF5ZXJzIjpbInByaW1hcnktZm9yZXN0cy0yMDAxIl19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcyIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwidGltZWxpbmVQYXJhbXMiOnsic3RhcnREYXRlIjoiMjAwMi0wMS0wMSIsImVuZERhdGUiOiIyMDIzLTEyLTMxIiwidHJpbUVuZERhdGUiOiIyMDIzLTEyLTMxIn0sInBhcmFtcyI6eyJ0aHJlc2hvbGQiOjMwLCJ2aXNpYmlsaXR5Ijp0cnVlLCJhZG1fbGV2ZWwiOiJhZG0wIn19XX0%3D&menu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJmb3Jlc3RDaGFuZ2UiLCJtZW51U2VjdGlvbiI6ImRhdGFzZXRzIn0%3D"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Painel do Fogo"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default TelaGrafico;
