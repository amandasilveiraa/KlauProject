import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 10vw; /* Ajuste o tamanho da logo conforme necessário */
    height: 20vh;
    margin-left: 10vw; /* Distância da borda direita */
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

//   &:hover {
//     background-color: #777; /* Cor de fundo do botão ao passar o mouse */
//   }
// border-bottom: 1px solid #121212; 
//   button{
//         box-shadow: black;
//         margin: 0 16px;
//         background-color: black;
//         color: white;
//         padding: 0 16px;
//         border: 1px solid #1F001F;
//         height: 56px;
//         min-width: 2rem;
//         transition: .5s ease-in-out;
//         cursor: pointer;
//         border-radius: 4px;
//         font-size: 16px;
//         opacity: 0.6;
//     }
//     button:hover{
//         position: relative;
//         background-color: #1F001F;
//         padding: 0 36px;
//         border-radius: 4px;
//         opacity: 0.9;
//     }
//     button:active{
//         background-color:#6959CD ;
//         border-radius: 4px;
//     }