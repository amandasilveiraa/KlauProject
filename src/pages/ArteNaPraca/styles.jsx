import styled from 'styled-components';

// Estilizando a div que conterá a imagem
export const BodyContainer = styled.div`
  margin: 0 auto; /* Centraliza o conteúdo */
  max-width: 1200px; /* Define a largura máxima */
  padding: 0 20px; /* Adiciona margem nas laterais */
`;

// Estilizando a imagem
export const ImageArteNaPraca = styled.img`
  width: 100%; /* Faz a imagem ocupar toda a largura da div */
  height: auto; /* Mantém a proporção da imagem */
  display: block; /* Remove espaços em branco abaixo da imagem */
`;