import React from 'react';
import LayoutPagesSquare from '../../../components/LayoutPagesSquare/LayoutPagesSquare';
import ArtistaBiografia from '../../../assets/Squares/Artista/ArtistaBiografia.jpg';

const cardsData = [
  { imageUrl: ArtistaBiografia, title: 'BIOGRAFIA', linkUrl: '/biografia'},
  { imageUrl: ArtistaBiografia, title: 'PALESTRAS', linkUrl: '/biografia'  },
  { imageUrl: ArtistaBiografia, title: 'MÍDIA', linkUrl: '/biografia'  },
  { imageUrl: ArtistaBiografia, title: 'CRÍTICA', linkUrl: '/biografia'  },
];

const Artista = () => {
  return (
    <div>
      <LayoutPagesSquare cardsData={cardsData} />
    </div>
  );
};

export default Artista;
