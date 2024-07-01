import React from "react";
import Layout from "../../../components/LayoutPagesText/LayoutPagesText";
import BigBiografia from "../../../assets/Texts/Big/BigBiografia.jpg";

import SmallBiografia1 from "../../../assets/Texts/Small/Biografia/SmallBiografia1.jpg";
import SmallBiografia2 from "../../../assets/Texts/Small/Biografia/SmallBiografia2.jpg";
import SmallBiografia3 from "../../../assets/Texts/Small/Biografia/SmallBiografia3.jpg";

const Biografia = () => {

  const paragraphs = [
    "Sou a Kláu, ( ou Cláudia Helena como diria dona Neni, minha mãe) artista plástica e arte educadora, especializada em educ. inclusiva. Participei de grupos de Arte e projetos que foram para outros países. Tenho trabalhos em instituições e exposições coletivas no RS. Me graduei na Feevale NH, foi um longo (e feliz) caminho. Atuei em escolas públicas, particulares e em projetos sociais e educacionais paralelos a Arteterapia.",
    "A arte foi entrando na minha vida devagarinho e eu pensava: de onde vem isso? Um olhar mais atento à família e numa conversa com meu pai, que hoje não está mais por aqui fisicamente, descobri que ele fazia tricô com a madrinha; do seu gosto pelo teatro eu já sabia, e que a mãe dele colava gravuras recortadas de papel de presente na parede para decorar! Meus primos tocam violão e lembrei que minha tia e meu pai quando se juntavam, até declamação com fundo de violão saía...gente era um Sarau! E escrevendo vou recordando muita coisa de criança “arteira”. Sobre o ensino ... tenho muitas primas dedicadas ao magistério a sua vida toda... e então realmente a fruta não caiu tãooo longe do pé assim como eu pensava.",
    "Atualmente dedico-me exclusivamente ao trabalho no Klau Brentano Atelier de Arte, um espaço que tem mais de 15 anos, em São Leopoldo onde realizo oficinas, com foco nas Férias Escolares, propondo atividades artísticas e lúdicas no período de recesso escolar. Durante o ano ocorrem oficinas, aulas, painting parties para mulheres e aulas de arte para educadores/as."
  ];

  const images = [
    { src: SmallBiografia1, objectPosition: '50% 60%' },
    { src: SmallBiografia2, objectPosition: '50% 70%' },
    { src: SmallBiografia3, objectPosition: '50% 70%' }
  ];

    return (
      <div>
        <Layout imageUrl={BigBiografia} 
        alt={"Foto grande da artista"} 
        objectPosition="50% 50%"
        titlePost={"UM DIA DE SOL É UM CONVITE"} 
        paragraphs={paragraphs} 
        images={images}/>
      </div>
    );
  };
  
  export default Biografia;