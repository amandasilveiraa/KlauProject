import React from 'react';
import { CardsContainer } from './styles';
import Card from '../../components/Card/Card';
import Arte from "../../assets/exemploKlauProjeto.jpg";
import Arte2 from "../../assets/exemploDoisKlauProjeto.jpg";
import MainHeader from '../../components/MainHeader/MainHeader';
import Footer from '../../components/Footer/Footer';

const Artista = () => {
  return (
    <div>
        <MainHeader />
        
        <CardsContainer>
                <Card imageUrl={Arte} title="BIOGRAFIA"
                />
                <Card imageUrl={Arte2} title="ANIVERSÁRIOS"/>
                <Card imageUrl={Arte} title="PALESTRAS"
                />
                <Card imageUrl={Arte2} title="FEEBACKS"/>
        </CardsContainer>

        <Footer />
    </div>
  );
};

export default Artista;
