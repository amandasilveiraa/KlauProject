import styled from 'styled-components';


export const CardMainConteiner = styled.div`
  margin-bottom: 7vh; /* Espaçamento vertical entre os cards */

`;

export const CardWrapper = styled.div`
  width: 27vw;
  height: 40vh;
  overflow: hidden; /* Para garantir que a imagem não ultrapasse os limites do card */
  cursor: pointer; /* Cursor do mouse mudará para indicar que é clicável */

  display: flex; /* Usando flexbox para centralizar a imagem */
  justify-content: center; /* Centralizando horizontalmente */
  align-items: center; /* Centralizando verticalmente */
  margin-bottom: 1vh;

`;

export const CardImage = styled.img`
  width: 100%; /* Faz com que a imagem ocupe toda a largura do card */
  height: 100%; /* Faz com que a imagem ocupe toda a altura do card */
  object-fit: cover; /* Ajusta a imagem para cobrir todo o conteúdo do card */

  filter: grayscale(50%); /* Aplica escala de cinza na imagem */
  transition: filter 0.0s ease; /* Animação suave de transição */

  &:hover {
    filter: grayscale(0%); /* Remove a escala de cinza ao passar o mouse */
  }
`;

export const CardTitle = styled.p`

  text-align: center;
  color: #777777; /* Cor cinza claro */
  cursor: pointer; /* Cursor do mouse mudará para indicar que é clicável */
  font-size: 19px;
  font-weight: 600;

  transition: color 0.3s ease; /* Animação de transição suave */
  
  &:hover {
    color: #FFA500; /* Cor laranja ao passar o mouse */
  }
`;
