import React from 'react';
import LayoutContato from '../../components/LayoutContato/LayoutContato';
import BigContato from '../../assets/Contato/BigContato.jpg'
import SmallContato from '../../assets/Contato/SmallContato.jpg'

function Contato() {

  return (
    <div className="App">
      <LayoutContato
        image={BigContato} 
        title="ATELIER"
        paragraphs={[
          "Rua Santa Catarina, 960",
          "Scharlau, São Leopoldo - RS",
          "CEP: 93120-010"
        ]}
        phoneNumber="+(51) 98478-0316"
        email="klau.brentano@hotmail.com"
        googleMapsSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.4470871952635!2d-51.15383032520437!3d-29.73577141703002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519429c5afd3b61%3A0x27b2c9b44fe55b1d!2sKl%C3%A1u%20Brentano%20Atelier%20de%20Arte!5e0!3m2!1spt-BR!2sbr!4v1718487737737!5m2!1spt-BR!2sbr"
        secondImage={SmallContato}
      />
    </div>
  );
}

export default Contato;
