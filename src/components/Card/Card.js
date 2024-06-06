import React from 'react';
// import { useHistory } from 'react-router-dom';
import { CardImage, CardMainConteiner, CardTitle, CardWrapper } from './styles';

const Card = ({ imageUrl, title }) => {
    // const history = useHistory();
  
    // Função para redirecionar para a página de destino ao clicar no card
    // const handleClick = () => {
    //   history.push(destinationUrl);
    // };
  
    return (
        <CardMainConteiner>
            <CardWrapper>
                <CardImage src={imageUrl} alt={title} />
            </CardWrapper>
            <CardTitle>{title}</CardTitle>
        </CardMainConteiner>

    );
  };
  
  export default Card;