import React from "react";
import LayoutHome from "../../components/LayoutHome/LayoutHome";

import Teste from '../../assets/Texts/Big/BigArteNaPraca.jpg'
import BigSarauDoRio from '../../assets/Home/BigHome.jpg';
import SmallSarauDoRio from '../../assets/Home/SmallHome.jpg'

const Home = () => {
    const galleryImages = [
        { src: Teste, alt: "Imagem 1" },
        { src: SmallSarauDoRio, alt: "Imagem 2" },
        { src: Teste, alt: "Imagem 3" }
        // Adicione mais objetos de imagem conforme necessário
    ];

    const paragraphs = [
        "A Secretaria Municipal de Cultura de São Paulo apresenta o projeto “Natureza Plástica”, do artista Eduardo Srur, que tem por objetivo levar aos Centros Educacionais Unificados (CEUs) da periferia de São Paulo a experiência transformadora de fazer arte com as próprias mãos.",
        "Srur desenvolveu um programa de atividades que integra conhecimento de história da arte e consciência ambiental por meio de palestras, oficinas e tecnologia. A partir de materiais que iriam para o lixo, orienta alunos e professores a se expressarem aplicando uma técnica inventada por ele.",
        "A exposição com as obras coletivas é o resultado das oficinas criativas com a participação dos 2.400 alunos dos CEUs Campo Limpo, Butantã e Paraisópolis e inclui alguns trabalhos inéditos do artista."
        // Adicione mais parágrafos conforme necessário
    ];
    return (
        <LayoutHome 
            mainImageSrc={BigSarauDoRio} 
            title="SARAU DO RIO 2024"
            credits="Por Klau Brentano" 
            subtitle={`"SERÁ UM ANO MUITO ESPECIAL"`} 
            paragraphs={paragraphs} 
            galleryImages={galleryImages} 
        />
    );
  };
  
  export default Home;