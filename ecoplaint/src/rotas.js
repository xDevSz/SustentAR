import TelaCadastro from "./Telas/TelaCadastro";
import TelaLogin from "./Telas/TelaLogin";
import TelaEsqueceuSenha from "./Telas/TelaEsqueceuSenha";
import TelaInicial from "./Telas/TelaInicial";
import TelaMapa from "./Telas/TelaMapa";
import TelaDenuncia from "./Telas/TelaDenuncia";
import TelaNotificacoes from "./Telas/TelaNotificacoes";
import TelaPerfil from "./Telas/TelaPerfil";
import TelaGrafico from "./Telas/TelaGrafico";
import TelaContato from "./Telas/TelaContato";
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
              <Route path="/TelaNotificacoes" element={<TelaNotificacoes />} />
              <Route path="/TelaPerfil" element={<TelaPerfil />} />
              <Route path="/TelaGrafico" element={<TelaGrafico />} />
              <Route path="/TelaContato" element={<TelaContato />} />
          </Routes>
          
      </BrowserRouter>
    )
  }