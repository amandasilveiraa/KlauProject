import React from "react";
import { BigImageContainer, BodyContainer, ImageArteNaPraca, Images, ImagesContainer, LeftSide, PostText, PostTitle, RightSide, SidesContainer } from "./styles";
import MainHeader from "../MainHeader/MainHeader";
import Footer from "../Footer/Footer";

const Layout = ({ imageUrl, alt, titlePost, paragraphs, images }) => {
    return (
      <div>
      <MainHeader />
      <BodyContainer>
        <BigImageContainer>
            <ImageArteNaPraca src={imageUrl} alt={alt} />
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
                {/* <Images src= {images} alt="Imagens"/> */}
                {images.map((image, index) => (
                <Images key={index} src={image} alt="Imagens do evento Arte na Praça" />
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
