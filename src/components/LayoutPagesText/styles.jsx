import styled from 'styled-components';

export const BodyContainer = styled.div`
  padding: 20vh 0 0 0;
  margin-bottom: 15vh;
`;

// Estilizando a div que conterá a imagem grande
export const BigImageContainer = styled.div`
  margin-right: 0.7vw;
  margin-left: 0.7vw;
  height: 90vh;
`;

// Estilizando a imagem grande
export const ImageArteNaPraca = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ objectPosition }) => objectPosition || '50% 50%'};
`;

export const SidesContainer = styled.div`
  margin: 8vw;
  margin-top: 4vh;
  display: flex;
  flex-direction: column; /* Padrão é coluna para telas pequenas */
  
  @media (min-width: 768px) {
    flex-direction: row; /* Mudança para linha em telas maiores */
  }
`;

export const LeftSide = styled.div`
  flex-basis: 100%; /* Ocupa toda a largura em telas pequenas */
  
  @media (min-width: 768px) {
    flex-basis: 30%; /* Ocupa 30% da largura em telas maiores */
  }
`;

export const PostTitle = styled.p`
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: 20px;
  font-weight: light;
  color: #666;
`;

export const PostText = styled.p`
  margin-top: 3vh;
  color: #666;
`;

export const RightSide = styled.div`
  flex-basis: 100%; /* Ocupa toda a largura em telas pequenas */
  margin-top: 4vh; /* Espaçamento superior para separação */
  
  @media (min-width: 768px) {
    flex-basis: 70%; /* Ocupa 70% da largura em telas maiores */
    margin-top: 0; /* Remove o espaçamento superior em telas maiores */
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;

    @media (min-width: 768px) {
      margin: 8vh 2vw;
  }
`;

// Estilizando as imagens para ter uma altura fixa e mesma proporção
export const Images = styled.img`
  width: 100%;
  height: 50vh; /* Definindo uma altura fixa */
  object-fit: cover;
  object-position: ${({ objectPosition }) => objectPosition || '50% 50%'}; /* Definindo a posição do objeto */
  
  @media (max-width: 768px) {
    height: 40vh;
  }
`;
