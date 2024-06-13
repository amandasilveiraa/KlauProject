import React from 'react';
import LayoutPagesSquare from '../../../components/LayoutPagesSquare/LayoutPagesSquare';
import Aniversarios from '../../../assets/Texts/Small/ArteNaPraca/ArteNaPracaEventos.jpg'

const cardsData = [
    { imageUrl: Aniversarios, title: 'ANIVERSÁRIOS', linkUrl: '/artenapraca' },
    { imageUrl: Aniversarios, title: 'ESCOLAS', linkUrl: '/artenapraca' },
    { imageUrl: Aniversarios, title: 'ARTE PÚBLICA', linkUrl: '/artenapraca' },
    { imageUrl: Aniversarios, title: 'E-BOOK', linkUrl: '/artenapraca' },
];

const Galeria = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default Galeria;
