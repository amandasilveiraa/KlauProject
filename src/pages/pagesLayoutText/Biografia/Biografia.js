import React from "react";
import Layout from "../../../components/LayoutPagesText/LayoutPagesText";
import BigBiografia from "../../../assets/Texts/Big/BigBiografia.jpg";

import SmallBiografia1 from "../../../assets/Texts/Small/Biografia/SmallBiografia1.jpg";
import SmallBiografia2 from "../../../assets/Texts/Small/Biografia/SmallBiografia2.jpg";
import SmallBiografia3 from "../../../assets/Texts/Small/Biografia/SmallBiografia3.jpg";

const Biografia = () => {

  const paragraphs = [
    "Klau Brentano vive e trabalha em São Paulo. Estudou na Faculdade de Artes Plásticas da Fundação Armando Álvares Penteado (FAAP) onde teve aulas com o artista Nelson Leirner e o fotógrafo Eduardo Brandão. Inicia a carreira com a linguagem de pintura nos anos 90, recebendo o Prêmio Michelângelo de Pintura Contemporânea no Centro Cultural de São Paulo (1996), Prêmio Bolsa de Estudo na Anual de Artes da FAAP (1997), Prêmio Salão de Arte Contemporânea de São Bernardo do Campo (2002), Prêmio na 9ª Bienal de Santos (2004) e Prêmio Revelação de Artes Plásticas no Museu de Arte Contemporânea de Americana (2003).",
    "Formada por uma réplica de carruagem imperial e quatro cavalos esculpidos em escala real, a intervenção foi instalada a mais de 30 metros de altura sobre a ponte Octávio Frias de Oliveira na marginal Pinheiros, em São Paulo.",
    "A  obra comparava a velocidade média de deslocamento de um carro no trânsito paulistano, durante o horário de pico, com a velocidade de uma carruagem nos tempos do Império quando o asfalto sequer existia. Ambos se movimentam a lentos 20 quilômetros por hora."
  ];

  const images = [
    SmallBiografia1,
    SmallBiografia2,
    SmallBiografia3
  ];

    return (
      <div>
        <Layout imageUrl={BigBiografia} alt={"Foto grande da arte na praça"}
        titlePost={"A ARTE INSPIRA"}  paragraphs={paragraphs} images={images}/>
      </div>
    );
  };
  
  export default Biografia;