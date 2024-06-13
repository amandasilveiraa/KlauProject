import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15vh;
`;

export const ImageContainer = styled.div`
  width: 97vw;
  padding-top: 19vh;
  margin-bottom: 25vh;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const BodyContainer = styled.div`
  display: flex;
  margin-bottom: 40vh;
`;

export const LeftContainer = styled.div`
  flex: 1;
  padding-right: 10vw; /* Espaço entre o texto e o mapa */
  padding-top: 6vh;
`;

export const Title = styled.p`
  text-align: left;
  color: #666;
  font-size: 1.4em;
  margin-bottom: 5vh;
`;

export const Paragraph = styled.p`
  text-align: left;
  color: #666;
`;

export const ContactInfo = styled.div`
  margin-top: 5vh;
`;

export const ContactLink = styled.a`
  display: block;
  color: #666;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease; /* Animação de transição suave */
  
  &:hover {
    color: #FFA500; /* Cor laranja ao passar o mouse */
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  padding-left: 10vw; /* Espaço entre o texto e o mapa */
`;

export const MapIframe = styled.iframe`
  width: 30vw;
  height: 45vh; /* Ajuste a altura conforme necessário */
  border: 0;
`;

export const SecondImageContainer = styled.div`
  width: calc(100% - 4vw); /* Largura da imagem com margem direita de 4vw */
  margin-right: 4vw;
  margin-top: 20px; /* Espaço entre o body e a segunda imagem */
`;

export const SecondStyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;