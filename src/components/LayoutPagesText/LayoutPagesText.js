import React from "react";
import { BigImageContainer, BodyContainer, ImageArteNaPraca, Images, ImagesContainer, LeftSide, PostText, PostTitle, RightSide, SidesContainer } from "./styles";
import MainHeader from "../MainHeader/MainHeader";
import Footer from "../Footer/Footer";

const Layout = ({ imageUrl, alt, titlePost, paragraphs, images, objectPosition }) => {
    return (
      <div>
        <MainHeader />
        <BodyContainer>
          <BigImageContainer>
            <ImageArteNaPraca src={imageUrl} alt={alt} objectPosition={objectPosition}/>
          </BigImageContainer>
          <SidesContainer>
            {/* Lado esquerdo */}
            <LeftSide>
              <PostTitle>{titlePost}</PostTitle>
              {paragraphs.map((paragraph, index) => (
                <PostText key={index}>{paragraph}</PostText>
              ))}
            </LeftSide>
            {/* Lado direito */}
            <RightSide>
              <ImagesContainer>
                {images.map((image, index) => (
                  <Images key={index} src={image.src} alt="Imagens do evento Arte na Praça" objectPosition={image.objectPosition}/>
                ))}
              </ImagesContainer>
            </RightSide>
          </SidesContainer>
        </BodyContainer>
        <Footer />
      </div>
    );
  };
  
  export default Layout;
