import React from 'react';
import LayoutPagesSquare from '../../../components/LayoutPagesSquare/LayoutPagesSquare';
import Aniversarios from '../../../assets/Squares/MaisAcoes/MaisAcoesAniversarios.jpg';
import Escolas from '../../../assets/Squares/MaisAcoes/MaisAcoesEscolas.jpg';
import ArtePublica from '../../../assets/Squares/MaisAcoes/MaisAcoesAniversarios.jpg';
import Ebook from '../../../assets/Squares/MaisAcoes/MaisAcoesAniversarios.jpg';

const cardsData = [
    { imageUrl: Aniversarios, title: 'ANIVERSÁRIOS' },
    { imageUrl: Escolas, title: 'ESCOLAS' },
    { imageUrl: ArtePublica, title: 'ARTE PÚBLICA' },
    { imageUrl: Ebook, title: 'E-BOOK' },
];

const MaisAcoes = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default MaisAcoes;
