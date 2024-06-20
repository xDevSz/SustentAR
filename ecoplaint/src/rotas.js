import TelaCadastro from "./Telas/TelaCadastro";
import TelaLogin from "./Telas/TelaLogin";
import TelaEsqueceuSenha from "./Telas/TelaEsqueceuSenha";
import TelaInicial from "./Telas/TelaInicial";
import TelaMapa from "./Telas/TelaMapa";
import TelaDenuncia from "./Telas/TelaDenuncia";
import TelaPlaceHolder from "./Telas/PlaceHolder"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function Rotas() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<TelaLogin />}/>
              <Route path="/TelaMapa" element={<TelaMapa />} />
              <Route path="/TelaDenuncia" element={<TelaDenuncia />} />
              <Route path="/TelaInicial" element={<TelaInicial />} />
              <Route path="/TelaCadastro" element={<TelaCadastro />} />
              <Route path="/TelaEsqueceuSenha" element={<TelaEsqueceuSenha />} />
              <Route path="/TelaPlaceHolder" elements={<TelaPlaceHolder />}/>
          </Routes>
          
      </BrowserRouter>
    )
  }