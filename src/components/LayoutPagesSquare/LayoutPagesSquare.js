import React from 'react';
import { LayoutContainer } from './styles';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';

const LayoutPagesSquare = ({ cardsData }) => {
  return (
    <div>
      <MainHeader />
      <LayoutContainer>
        {cardsData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} linkUrl={card.linkUrl} />
        ))}
    </LayoutContainer>
    <Footer />
    </div>
  );
};

export default LayoutPagesSquare;


