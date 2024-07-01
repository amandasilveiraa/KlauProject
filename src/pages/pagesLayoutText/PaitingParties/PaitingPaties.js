import React from "react";
import Layout from "../../../components/LayoutPagesText/LayoutPagesText";

import BigEscolas from "../../../assets/Texts/Big/BigEscolas.jpg";

import SmallEscolas0 from "../../../assets/Texts/Small/Escolas/SmallEscolas.jpg";
import SmallEscolas1 from "../../../assets/Texts/Small/Escolas/SmallEscolas1.jpg";
import SmallEscolas2 from "../../../assets/Texts/Small/Escolas/SmallEscolas2.jpg";

const PaitingParties = () => {

  const paragraphs = [
    "Atualmente dedico-me exclusivamente ao trabalho no Klau Brentano Atelier de Arte, um espaço que tem mais de 15 anos, em São Leopoldo onde realizo oficinas, com foco nas Férias Escolares, propondo atividades artísticas e lúdicas no período de recesso escolar. Durante o ano ocorrem oficinas, aulas, painting parties para mulheres e aulas de arte para educadores/as."
  ];

  const images = [
    { src: SmallEscolas0, objectPosition: '50% 80%' },
    { src: SmallEscolas1, objectPosition: '50% 70%' },
    { src: SmallEscolas2, objectPosition: '50% 70%' }
  ];

    return (
      <div>
        <Layout imageUrl={BigEscolas} 
        alt={"Foto grande das crianças pintando na escola"} 
        objectPosition="50% 55%"
        titlePost={"UM DIA DE SOL É UM CONVITE"} 
        paragraphs={paragraphs} 
        images={images}/>
      </div>
    );
  };
  
  export default PaitingParties;