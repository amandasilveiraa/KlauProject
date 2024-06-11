import React from 'react';
import { LayoutContainer } from './styles';
import Card from '../Card/Card';

const LayoutPagesSquare = ({ cardsData }) => {
  return (
    <LayoutContainer>
      {cardsData.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} title={card.title} />
      ))}
    </LayoutContainer>
  );
};

export default LayoutPagesSquare;


