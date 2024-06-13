import React from 'react';
import { DireitosAutorais, FooterWrapper, Icon, IconContainer } from './styles';
import facebook from '../../assets/Footer/facebook.png';
import instagram from '../../assets/Footer/instagram.png';
import whats from '../../assets/Footer/whatsapp.png';

const Footer = () => {
    // Função para redirecionar para o site correspondente ao clicar no ícone
    const redirectToSite = (site) => {
      // Coloque aqui os links dos sites correspondentes
      switch (site) {
        case 'facebook':
          window.open('https://pt-br.facebook.com/www.klaubrentano/', '_blank', 'noopener,noreferrer');
          break;
        case 'instagram':
          window.open('https://www.instagram.com/klaubrentanoartes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank', 'noopener,noreferrer');
          break;
        case 'whatsapp':
          window.open('https://pt-br.facebook.com/www.klaubrentano/', '_blank', 'noopener,noreferrer');
          break;
        default:
          break;
      }
    };
  
    return (
      <FooterWrapper>
        {/* Texto de direitos autorais */}
        <DireitosAutorais>
            © copyright Klau Brentano 2024 - todos os direitos reservados
        </DireitosAutorais>
        <IconContainer>
            {/* Ícone do Facebook */}
            <Icon
            src={facebook}
            alt="Icon do Facebook"
            onClick={() => redirectToSite('facebook')}
            />
            {/* Ícone do Instagram */}
            <Icon
            src={instagram}
            alt="Icon do Instagram"
            onClick={() => redirectToSite('instagram')}
            />
            {/* Ícone do WhatsApp */}
            <Icon
            src={whats}
            alt="Icon do WhatsApp"
            onClick={() => redirectToSite('whatsapp')}
            />
        </IconContainer>
      </FooterWrapper>
    );
  };
  
  export default Footer;