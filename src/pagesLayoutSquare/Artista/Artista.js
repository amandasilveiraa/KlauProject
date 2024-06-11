import React from 'react';
import LayoutPagesSquare from '../../components/LayoutPagesSquare/LayoutPagesSquare';
import ArtistaBiografia from '../../assets/Squares/Artista/ArtistaBiografia.jpg';

const cardsData = [
  { imageUrl: ArtistaBiografia, title: 'BIOGRAFIA' },
  { imageUrl: ArtistaBiografia, title: 'PALESTRAS' },
  { imageUrl: ArtistaBiografia, title: 'MÍDIA' },
  { imageUrl: ArtistaBiografia, title: 'CRÍTICA' },
];

const Artista = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default Artista;
