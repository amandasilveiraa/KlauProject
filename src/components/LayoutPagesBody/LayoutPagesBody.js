import React from "react";
import Footer from "../Footer/Footer";
import MainHeader from "../MainHeader/MainHeader";
import { BigImageContainer, BodyContainer, ImageArteNaPraca, Images, ImagesContainer, LeftSide, PostText, PostTitle, RightSide } from "./styles";

const Layout = ({ imageUrl, alt, titlePost, paragraphs, images }) => {
    return (
      <div>
        <MainHeader />
        <BigImageContainer>
            <ImageArteNaPraca src={imageUrl} alt={alt} />
        </BigImageContainer>
        <BodyContainer>
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
                {images.map((image) => (
                <Images src={image} alt="Imagens do evento Arte na Praça" />
              ))}
              </ImagesContainer>
            </RightSide>
        </BodyContainer>

        <Footer />
      </div>
    );
  };
  
  export default Layout;
