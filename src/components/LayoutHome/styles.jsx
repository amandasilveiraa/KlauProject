import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2vw;
    padding-top: 23vh;
`;

export const StyledImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100vh;
`;

export const MainImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover; /* Para cobrir o contêiner */
`;

export const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20vw;
    margin-left: 20vw;
`

export const Title = styled.p`
    font-size: 2em;
    margin-top: 3vh;
`;

export const Credits = styled.p`
    text-align: center;
    font-size: 1.3em;
    color: #666;
    margin-bottom: 4vh;
`;

export const Subtitle = styled.p`
    font-size: 1.5em;
    color: #666;
    margin-bottom: 4vh;
`;

export const Paragraph = styled.p`
    text-align: center;
    line-height: 1.6; /* Ajuste o valor conforme necessário para maior espaçamento */
    margin-bottom: 1em; /* Espaçamento entre os parágrafos */
    font-size: 1rem; /* Ajuste o tamanho da fonte conforme necessário */
`;

export const ImageGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6vh; /* Espaçamento entre as imagens */
    justify-content: center;
    padding-top: 6vh;
    margin-bottom: 15vh;
`;

export const GalleryImage = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;