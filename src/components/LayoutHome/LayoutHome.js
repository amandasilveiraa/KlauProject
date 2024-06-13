import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import Footer from "../Footer/Footer";
import { Container, Credits, GalleryImage, ImageGallery, MainImage, Paragraph, StyledImageContainer, StyledTextContainer, Subtitle, Title } from "./styles";

const LayoutHome = ({  mainImageSrc, title, credits, subtitle, paragraphs, galleryImages }) => {
    return (
        <div>
            <MainHeader />
            <Container>
                <StyledImageContainer>
                    <MainImage src={mainImageSrc} alt="Imagem Principal" />
                </StyledImageContainer>
                <StyledTextContainer>
                    <Title>{title}</Title>
                    <Credits>{credits}</Credits>
                    <Subtitle>{subtitle}</Subtitle>
                    {paragraphs.map((paragraph, index) => (
                        <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                    <ImageGallery>
                        {galleryImages.map((image, index) => (
                            <GalleryImage key={index} src={image.src} alt={image.alt} />
                        ))}
                    </ImageGallery>
                </StyledTextContainer>
            </Container>
            <Footer />
        </div>
    );
  };
  
  export default LayoutHome;