import React from 'react';
import "../formulario.css";
import Iconenotificacao from '../../iconenotificacao';


const Formulariocontato = () => {
  return (
    <section className="formulario">
      <form>
       <Iconenotificacao titulo= "193" descricao="Corpo De Bombeiros"> </Iconenotificacao>
      <Iconenotificacao titulo= "(69) 3541-4233" descricao="SEDAM- GUAJARÁ MIRIM"></Iconenotificacao>
      <Iconenotificacao titulo= "(69) 3212-9605" descricao="Coord. de Povos Indigenas"></Iconenotificacao>
      <Iconenotificacao titulo= "(69) 3212-9613" descricao="Coord. de Proteção Ambiental"></Iconenotificacao>
      </form>
    </section>
  );
};

export default Formulariocontato;
