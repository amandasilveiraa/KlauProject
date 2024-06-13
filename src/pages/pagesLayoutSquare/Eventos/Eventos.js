import React from 'react';
import LayoutPagesSquare from '../../../components/LayoutPagesSquare/LayoutPagesSquare';
import ArteNaPraca from '../../../assets/Squares/Eventos/EventosArteNaPraca.jpg'
import SaoLeoOpen from '../../../assets/Squares/Eventos/EventosSaoLeoOpen.jpg'
import ParqueImperatriz from '../../../assets/Squares/Eventos/EventosParqueImperatriz.jpg'
import NatalNaScharlau from '../../../assets/Squares/Eventos/EventosNatalNaScharlau.jpg'
import YazigiFamilyDay from '../../../assets/Squares/Eventos/EventosYazigiFamilyDay.jpg'
import SarauDoRio from '../../../assets/Squares/Eventos/EventosSarauDoRio.jpg'

const cardsData = [
  { imageUrl: ArteNaPraca, title: 'ARTE NA PRAÇA', linkUrl: '/artenapraca' },
  { imageUrl: SaoLeoOpen, title: 'SÃO LEO OPEN', linkUrl: '/artenapraca' },
  { imageUrl: ParqueImperatriz, title: 'PARQUE IMPERATRIZ', linkUrl: '/artenapraca' },
  { imageUrl: NatalNaScharlau, title: 'NATAL NA SCHARLAU', linkUrl: '/artenapraca' },
  { imageUrl: YazigiFamilyDay, title: 'YÁZIGI FAMILY DAY', linkUrl: '/artenapraca' },
  { imageUrl: SarauDoRio, title: 'SARAU DO RIO', linkUrl: '/artenapraca' },
];

const Eventos = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default Eventos;