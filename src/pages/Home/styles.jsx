import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2vw;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100vh;
  margin: 20px;
`;

export const Title = styled.p`
  font-size: 2em;
  margin: 10px 0;
`;

export const Subtitle = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
`;

export const Spacer = styled.div`
  height: 50px;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin: 10px 0;
  text-align: center;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GalleryImage = styled.img`
  width: 100%;
  margin: 10px 0;
`;