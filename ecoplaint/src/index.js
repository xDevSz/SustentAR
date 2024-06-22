import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "../src/reportWebVitals";
import Rotas from "./rotas";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <React.StrictMode>
      <Rotas />
    </React.StrictMode>
  );
};

root.render(<App />);

reportWebVitals();
