import React from 'react';
import { Button, ButtonContainer, HeaderWrapper, LastButton, Logo } from './styles';
// import { Button, ButtonHome, ContainerHeader, Img } from "./styles";
// import logoImg from "../../assets/klauLogo.png";
import logoKlau from '../../assets/klauLogo.png'

function MainHeader (){
    return (
        <HeaderWrapper>
          <Logo src={logoKlau} alt="Logo" />
          <ButtonContainer>
            <Button>O ARTISTA</Button>
            <Button>INTERVENÇÕES</Button>
            <Button>GALERIA</Button>
            <Button>+ AÇÕES</Button>
        </ButtonContainer>
        <LastButton>CONTATO</LastButton>
        </HeaderWrapper>
      );
}
  
export default MainHeader;