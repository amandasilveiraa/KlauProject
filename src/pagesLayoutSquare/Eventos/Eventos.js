import React from 'react';
import { CardsContainer } from './styles';
import Card from '../../components/Card/Card';
import ArteNaPraca from "../../assets/ArteNaPracaEventos.jpg";
import SaoLeoOpen from '../../assets/SaoLeoOpenEventos.jpg'
import ParqueImperatriz from "../../assets/ParqueImperatrizEventos.jpg";

const Eventos = () => {
  return (
    <div>
      <CardsContainer>
              <Card imageUrl={ArteNaPraca} title="ARTE NA PRAÇA"/>
              <Card imageUrl={SaoLeoOpen} title="SÃO LEO OPEN"/>
              <Card imageUrl={ParqueImperatriz} title="PARQUE IMPERATRIZ"/>
      </CardsContainer>
    </div>
  );
};

export default Eventos;