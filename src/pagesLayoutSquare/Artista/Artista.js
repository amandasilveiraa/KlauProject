import React from 'react';
import { CardsContainer } from './styles';
import Card from '../../components/Card/Card';
import Arte from "../../assets/exemploKlauProjeto.jpg";
import Arte2 from "../../assets/exemploDoisKlauProjeto.jpg";

const Artista = () => {
  return (
    <div>
      <CardsContainer>
              <Card imageUrl={Arte} title="BIOGRAFIA"/>
              <Card imageUrl={Arte2} title="ANIVERSÁRIOS"/>
              <Card imageUrl={Arte} title="PALESTRAS"/>
              <Card imageUrl={Arte2} title="FEEBACKS"/>
      </CardsContainer>
    </div>
  );
};

export default Artista;
