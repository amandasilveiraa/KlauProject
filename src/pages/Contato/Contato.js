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
        googleMapsSrc="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1718298000437!5m2!1spt-BR!2sbr!6m8!1m7!1sXLmZSlI9QsrguTNKAplNmg!2m2!1d-29.7358176391226!2d-51.15110145164017!3f310.7517695308584!4f-7.640277274096633!5f0.7820865974627469"
        secondImage={SmallContato}
      />
    </div>
  );
}

export default Contato;
