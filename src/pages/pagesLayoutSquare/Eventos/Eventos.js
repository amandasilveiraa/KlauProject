import React from 'react';
import LayoutPagesSquare from '../../../components/LayoutPagesSquare/LayoutPagesSquare';

import PaitingParties from '../../../assets/Squares/Eventos/EventosPaitingParties.jpg';
import SarauDoRio from '../../../assets/Squares/Eventos/EventosSarauDoRio.jpg';
import SaoLeoOpen from '../../../assets/Squares/Eventos/EventosSaoLeoOpen.jpg';
import ParqueImperatriz from '../../../assets/Squares/Eventos/EventosParqueImperatriz.jpg';

const cardsData = [
  { imageUrl: PaitingParties, title: 'PAITING PARTIES', linkUrl: '/artenapraca' },
  { imageUrl: SarauDoRio, title: 'SARAU DO RIO', linkUrl: '/artenapraca' },
  { imageUrl: SaoLeoOpen, title: 'SÃO LEO OPEN', linkUrl: '/artenapraca' },
  { imageUrl: SaoLeoOpen, title: 'HAMBURGUERBERG FEST', linkUrl: '/artenapraca' },
  { imageUrl: ParqueImperatriz, title: 'ARTE NA PRAÇA', linkUrl: '/artenapraca' },
  { imageUrl: ParqueImperatriz, title: 'PARQUE IMPERATRIZ', linkUrl: '/artenapraca' }
];

const Eventos = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default Eventos;