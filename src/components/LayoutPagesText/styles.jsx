import styled from 'styled-components';

export const BodyContainer = styled.div`
  padding: 25vh 0 0 0;
  margin-bottom: 15vh;
`

// Estilizando a div que conterá a imagem
export const BigImageContainer = styled.div`
  margin-right: 0.7vw;
  margin-left: 0.7vw;
  height: 90vh;
`;

// Estilizando a imagem
export const ImageArteNaPraca = styled.img`
  width: 100%; /* Faz com que a imagem ocupe toda a largura do card */
  height: 100%; /* Faz com que a imagem ocupe toda a altura do card */
  object-fit: cover; /* Ajusta a imagem para cobrir todo o conteúdo do card */
`;

export const SidesContainer = styled.div`
  margin: 8vw; /* Centraliza o conteúdo e adiciona espaçamento */
  margin-top: 4vh;
  // max-width: 1200px; /* Define a largura máxima */
  display: flex; /* Para dividir a página em dois */
  display: flex; /* Para dividir a página em dois */  
`;

// Estilizando o lado esquerdo da página
export const LeftSide = styled.div`
  flex-basis: 30%; /* Faz com que ocupe 30% do espaço disponível */
`;

export const PostTitle = styled.p`
  margin-top: 5vh; /* Adiciona espaçamento inferior ao título */
  margin-bottom: 5vh;
  font-size: 20px;
  font-weight: light;
`;

// Estilizando o parágrafo
export const PostText = styled.p`
  margin-top: 3vh; /* Adiciona espaçamento superior ao parágrafo */

`;

// Estilizando o lado direito da página
export const RightSide = styled.div`
  flex-basis: 70%; /* Faz com que ocupe 70% do espaço disponível */
`;

export const ImagesContainer = styled.div`
  margin: 8vh 2vw;
  height: 100vh;
  overflow: hidden; /* Para garantir que a imagem não ultrapasse os limites do card */

  display: flex; /* Usando flexbox para centralizar a imagem */
  justify-content: center; /* Centralizando horizontalmente */
  align-items: center; /* Centralizando verticalmente */

  flex-direction: column; /* Faz com que as imagens fiquem uma abaixo da outra */
  gap: 3vh; /* Adiciona espaçamento entre as imagens */
`;

export const Images = styled.img`
  width: 100%; /* Faz com que a imagem ocupe toda a largura do card */
  height: 100%; /* Faz com que a imagem ocupe toda a altura do card */
  object-fit: cover; /* Ajusta a imagem para cobrir todo o conteúdo do card */
`
