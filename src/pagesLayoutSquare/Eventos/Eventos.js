import React from 'react';
import LayoutPagesSquare from '../../components/LayoutPagesSquare/LayoutPagesSquare';
import ArteNaPraca from '../../assets/EventosArteNaPraca.jpg'
import SaoLeoOpen from '../../assets/EventosSaoLeoOpen.jpg'
import ParqueImperatriz from '../../assets/EventosParqueImperatriz.jpg'
import NatalNaScharlau from '../../assets/EventosNatalNaScharlau.jpg'
import YazigiFamilyDay from '../../assets/EventosYazigiFamilyDay.jpg'
import SarauDoRio from '../../assets/EventosSarauDoRio.jpg'

const cardsData = [
  { imageUrl: ArteNaPraca, title: 'ARTE NA PRAÇA' },
  { imageUrl: SaoLeoOpen, title: 'SÃO LEO OPEN' },
  { imageUrl: ParqueImperatriz, title: 'PARQUE IMPERATRIZ' },
  { imageUrl: NatalNaScharlau, title: 'NATAL NA SCHARLAU' },
  { imageUrl: YazigiFamilyDay, title: 'YÁZIGI FAMILY DAY' },
  { imageUrl: SarauDoRio, title: 'SARAU DO RIO' },
];

const Eventos = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default Eventos;