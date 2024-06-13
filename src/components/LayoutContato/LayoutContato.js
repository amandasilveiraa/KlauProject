import React from "react";
import { BodyContainer, ContactInfo, ContactLink, ImageContainer, LeftContainer, MapIframe, PageContainer, Paragraph, RightContainer, SecondImageContainer, SecondStyledImage, StyledImage, Title } from "./styles";
import MainHeader from "../MainHeader/MainHeader";
import Footer from "../Footer/Footer";

const LayoutContato = ({ image, secondImage, title, paragraphs,  phoneNumber, email, googleMapsSrc }) => {
    return (
        <div>
            <MainHeader />
            <PageContainer>
                <ImageContainer>
                    <StyledImage src={image} alt="Foto do ateelier" />
                </ImageContainer>
                <BodyContainer>
                    <LeftContainer>
                    <Title>{title}</Title>
                    {paragraphs.map((paragraph, index) => (
                        <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                    <ContactInfo>
                        <ContactLink href={`tel:${phoneNumber}`}>{phoneNumber}</ContactLink>
                        <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
                    </ContactInfo>
                    </LeftContainer>
                    <RightContainer>
                    <MapIframe 
                        src={googleMapsSrc} 
                        allowFullScreen="" 
                        loading="lazy"
                    />
                    </RightContainer>
                </BodyContainer>
                <SecondImageContainer>
                    <SecondStyledImage src={secondImage} alt="Foto da Klau no atelier" />
                </SecondImageContainer>
            </PageContainer>
            <Footer />
        </div>
    );
};

export default LayoutContato;