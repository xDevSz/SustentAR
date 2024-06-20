/* eslint-disable react/react-in-jsx-scope */
import "./mapa.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";

const Mapa = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBNnoMuVMgRRhrZptrmWufpJ9eDb18e0sk",
  });

  const [currentPosition, setCurrentPosition] = useState(null);

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

  const center = useMemo(() => currentPosition || { lat: 0, lng: 0 }, [currentPosition]);

  return (
    <div className="Mapa">
      {!isLoaded ? (
        <h1>Carregando...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}  // Ajuste o nível de zoom aqui
        >
          {currentPosition && <Marker position={currentPosition} />}
        </GoogleMap>
      )}
    </div>
  );
};

export default Mapa;
