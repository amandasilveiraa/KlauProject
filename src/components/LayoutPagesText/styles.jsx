import styled from 'styled-components';

export const BodyContainer = styled.div`
  padding: 20vh 0 0 0;
  margin-bottom: 15vh;
`;

// Estilizando a div que conterá a imagem
export const BigImageContainer = styled.div`
  margin-right: 0.7vw;
  margin-left: 0.7vw;
  height: 90vh;
`;

// Estilizando a imagem
export const ImageArteNaPraca = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SidesContainer = styled.div`
  margin: 8vw;
  margin-top: 4vh;
  display: flex;
`;

export const LeftSide = styled.div`
  flex-basis: 30%;
`;

export const PostTitle = styled.p`
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: 20px;
  font-weight: light;
`;

export const PostText = styled.p`
  margin-top: 3vh;
`;

export const RightSide = styled.div`
  flex-basis: 70%;
`;

export const ImagesContainer = styled.div`
  margin: 8vh 2vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

// Estilizando as imagens para ter uma altura fixa e mesma proporção
export const Images = styled.img`
  width: 100%;
  height: 50vh; /* Definindo uma altura fixa */
  object-fit: cover;
`;