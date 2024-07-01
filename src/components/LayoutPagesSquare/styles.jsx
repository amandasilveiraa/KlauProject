import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 5.5vw;
  margin-right: 5.5vw;
  padding-top: 22vh;
  margin-bottom: 15vh;

    @media (max-width: 768px) {
      flex-direction: column; /* Cards empilhados um abaixo do outro */
      align-items: center; /* Alinha os cards no centro */
      margin-left: 2vw; /* Margem menor à esquerda */
      margin-right: 2vw; /* Margem menor à direita */
      padding-top: 15vh; /* Espaçamento superior menor */
      margin-bottom: 10vh; /* Espaçamento inferior menor */
  }
`;