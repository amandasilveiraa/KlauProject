import React, { useState } from 'react';
import { Button, ButtonContainer, HeaderWrapper, HeaderWrapperMobile, LastButton, Logo, MobileLogo, MobileMenu, MobileMenuIcon, MobileMenuLink } from './styles';
import logoKlau from '../../assets/Header/logoKlauOriginal.png'
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <Link to="/"><Logo src={logoKlau} alt="Logo" /></Link>
        <ButtonContainer>
          <Link to="/artista"><Button>O ARTISTA</Button></Link>
          <Link to="/eventos"><Button>EVENTOS</Button></Link>
          <Link to="/galeria"><Button>GALERIA</Button></Link>
          <Link to="/maisacoes"><Button>+ AÇÕES</Button></Link>
        </ButtonContainer>
        <Link to="/contato"><LastButton>CONTATO</LastButton></Link>
      </HeaderWrapper>

      <HeaderWrapperMobile>
        <Link to="/"><MobileLogo src={logoKlau} alt="Logo" /></Link>
        <MobileMenuIcon onClick={toggleMenu}>&#9776;</MobileMenuIcon>
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLink to="/artista" onClick={toggleMenu}>O ARTISTA</MobileMenuLink>
          <MobileMenuLink to="/eventos" onClick={toggleMenu}>EVENTOS</MobileMenuLink>
          <MobileMenuLink to="/galeria" onClick={toggleMenu}>GALERIA</MobileMenuLink>
          <MobileMenuLink to="/maisacoes" onClick={toggleMenu}>+ AÇÕES</MobileMenuLink>
          <MobileMenuLink to="/contato" onClick={toggleMenu}>CONTATO</MobileMenuLink>
        </MobileMenu>
      </HeaderWrapperMobile>
    </>
  );
};

export default MainHeader;