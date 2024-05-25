/* eslint-disable react/react-in-jsx-scope */
import "./mapa.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Mapa = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBNnoMuVMgRRhrZptrmWufpJ9eDb18e0sk",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="Mapa">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Mapa;