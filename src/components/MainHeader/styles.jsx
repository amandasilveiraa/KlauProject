import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1000; /* Garante que a header fique acima dos cards */
  @media (max-width: 768px) {
    display: none; /* Ocultar por padrão em telas menores */
  }
`;

export const Logo = styled.img`
  width: 10vw; /* Ajuste o tamanho da logo conforme necessário */
  height: 20vh;
  margin-left: 10vw; /* Distância da borda direita */
  margin-top: 2vh;
  transform: rotate(-13deg); /* Rotação de -13 graus */
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 7vw;
`;

export const Button = styled.button`
  background-color: transparent;
  margin-right: 5vw; /* Espaçamento entre os botões */
  border: none;
  color: black; /* Cor do texto do botão */
  cursor: pointer;
  transition: transform 0.2s; /* Adicionando uma transição de 0.2s */

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho do botão em 10% */
  }
`;

export const LastButton = styled.button`
  background-color: transparent;
  margin-right: 10vw; /* Espaçamento entre os botões */
  border: none;
  color: black; /* Cor do texto do botão */
  cursor: pointer;
  transition: transform 0.2s; /* Adicionando uma transição de 0.2s */

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho do botão em 10% */
  }
`;

// Estilos para telas menores (mobile)
export const HeaderWrapperMobile = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1000; /* Garante que a header fique acima dos cards */
  display: none; /* Ocultar por padrão */

  @media (max-width: 768px) {
    display: flex; /* Mostrar apenas em telas menores que 768px */
  }
`;

export const MobileLogo = styled.img`
  width: 30%; /* Tamanho da logo como 30% da largura do header móvel */
  height: auto; /* Altura automática para manter proporções */
  margin-left: 10px; /* Espaçamento à esquerda */
`;

export const MobileMenuIcon = styled.div`
  font-size: 2rem;
  margin-right: 10vw; /* Espaçamento do ícone de menu */
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 12vh; /* Ajuste a posição vertical do menu móvel conforme necessário */
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh;
  display: none; /* Ocultar menu mobile por padrão */

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Mostrar menu se isOpen for true */
  }
`;

export const MobileMenuLink = styled(Link)`
  margin: 2vh; /* Espaçamento entre os itens do menu */
  color: black;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: gray; /* Cor do texto ao passar o mouse */
  }
`;