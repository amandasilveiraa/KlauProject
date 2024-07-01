import React from 'react';
import LayoutPagesSquare from '../../../components/LayoutPagesSquare/LayoutPagesSquare';
import Aniversarios from '../../../assets/Squares/MaisAcoes/MaisAcoesAniversarios.jpg';
import Escolas from '../../../assets/Squares/MaisAcoes/MaisAcoesEscolas.jpg';
import ArtePublica from '../../../assets/Squares/MaisAcoes/MaisAcoesAniversarios.jpg';
import Ebook from '../../../assets/Squares/MaisAcoes/MaisAcoesAniversarios.jpg';

const cardsData = [
    { imageUrl: Aniversarios, title: 'ANIVERSÁRIOS', linkUrl: '/artenapraca' },
    { imageUrl: Escolas, title: 'ESCOLAS', linkUrl: '/escolas' },
    { imageUrl: ArtePublica, title: 'EVENTOS COORPORATIVOS', linkUrl: '/artenapraca' },
    { imageUrl: ArtePublica, title: 'FESTAS MUNICIPAIS', linkUrl: '/artenapraca' },
    { imageUrl: Ebook, title: 'ARTES NAS FÉRIAS', linkUrl: '/artenapraca' },
    { imageUrl: Ebook, title: 'YÁZIGI FAMILY DAY', linkUrl: '/artenapraca' },

];

const MaisAcoes = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default MaisAcoes;
