// Localizacao.jsx
import React, { useState, useEffect } from "react";
import "./localizacao.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Localizacao = ({ onChange }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBNnoMuVMgRRhrZptrmWufpJ9eDb18e0sk", // Substitua pela sua chave da API do Google Maps
  });

  const [mostraPopup, setMostraPopup] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Erro ao obter a localização do usuário:", error);
        }
      );
    } else {
      console.error("Geolocalização não é suportada por este navegador.");
    }
  }, []);

  const handleAdicionarClick = () => {
    setMostraPopup(true);
  };

  const handleMapClick = (event) => {
    const newPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setSelectedPosition(newPosition);
  };

  const handleConfirmarClick = () => {
    if (selectedPosition) {
      onChange(selectedPosition);
      setMostraPopup(false);
    } else {
      alert("Por favor, selecione um local no mapa.");
    }
  };

  const handleCancelarClick = () => {
    setMostraPopup(false);
  };

  return (
    <div className="localizacao">
      <a href="#" onClick={handleAdicionarClick} className="adicionar-link">Adicionar localização</a>
      {mostraPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Adicionar Localização</h3>
            {isLoaded ? (
              <GoogleMap
                mapContainerClassName="map-container"
                center={currentPosition}
                zoom={15}
                onClick={handleMapClick}
              >
                {selectedPosition && <Marker position={selectedPosition} />}
              </GoogleMap>
            ) : (
              <h1>Carregando...</h1>
            )}
            <div className="button-group">
              <button onClick={handleConfirmarClick}>Confirmar</button>
              <button onClick={handleCancelarClick} className="cancelar">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Localizacao;
