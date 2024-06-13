import React from 'react';
import { Button, ButtonContainer, HeaderWrapper, LastButton, Logo } from './styles';
import logoKlau from '../../assets/Header/logoKlauOriginal.png'
import { Link } from 'react-router-dom';

const MainHeader = () => {

    return (
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
      );
}
  
export default MainHeader;