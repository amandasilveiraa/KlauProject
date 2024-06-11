import React from "react";
import Layout from "../../components/LayoutPagesText/LayoutPagesText";
import ArteBigFoto from "../../assets/ArteNaPracaBig.jpg";
import ImagesPraca from "../../assets/TesteImgPraca.jpg"
import ImagesArteNaPraca2 from "../../assets/Teste2ArtePraca.jpg"

const ArteNaPraca = () => {

  const paragraphs = [
    "A intervenção provocava um questionamento sobre os problemas de mobilidade nos grandes centros urbanos.",
    "Formada por uma réplica de carruagem imperial e quatro cavalos esculpidos em escala real, a intervenção foi instalada a mais de 30 metros de altura sobre a ponte Octávio Frias de Oliveira na marginal Pinheiros, em São Paulo.",
    "A  obra comparava a velocidade média de deslocamento de um carro no trânsito paulistano, durante o horário de pico, com a velocidade de uma carruagem nos tempos do Império quando o asfalto sequer existia. Ambos se movimentam a lentos 20 quilômetros por hora."
  ];

  const images = [
    ImagesPraca,
    ImagesArteNaPraca2
  ];

    return (
      <div>
        <Layout imageUrl={ArteBigFoto} alt={"Foto grande da arte na praça"}
        titlePost={"ARTE NA PRAÇA"}  paragraphs={paragraphs} images={images}/>
      </div>
    );
  };
  
  export default ArteNaPraca;