import React from 'react';
import { Button, ButtonContainer, HeaderWrapper, LastButton, Logo } from './styles';
import logoKlau from '../../assets/Header/logoKlauOriginal.png'

const MainHeader = () => {

    return (
        <HeaderWrapper>
          <Logo src={logoKlau} alt="Logo" />
          <ButtonContainer>
            <Button>O ARTISTA</Button>
            <Button>EVENTOS</Button>
            <Button>GALERIA</Button>
            <Button>+ AÇÕES</Button>
          </ButtonContainer>
          <LastButton>CONTATO</LastButton>
        </HeaderWrapper>
      );
}
  
export default MainHeader;