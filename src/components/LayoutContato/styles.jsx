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

  @media (max-width: 768px) {
    margin-bottom: 5vh;
    padding-top: 10vh;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  margin-bottom: 40vh;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10vh;
    padding: 0 2vw;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  padding-right: 10vw;
  padding-top: 6vh;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-top: 2vh;
  }
`;

export const Title = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.4em;
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 3vh;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 2vh;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 5vh;

  @media (max-width: 768px) {
    margin-top: 2vh;
    text-align: center;
  }
`;

export const ContactLink = styled.a`
  display: block;
  color: #666;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease;

  &:hover {
    color: #FFA500;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 1vh;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  padding-left: 10vw;

  @media (max-width: 768px) {
    padding-left: 10;
    margin-top: 4vh;
  }
`;

export const MapIframe = styled.iframe`
  width: 30vw;
  height: 45vh;
  border: 0;

  @media (max-width: 768px) {
    width: 100vw;
    height: 35vh;
  }
`;

export const SecondImageContainer = styled.div`
  width: calc(100% - 4vw);
  margin-right: 4vw;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top: 10px;
  }
`;

export const SecondStyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;