import React from 'react';
import { CardImage, CardMainConteiner, CardTitle, CardWrapper, StyledLink } from './styles';

const Card = ({ imageUrl, title, linkUrl }) => {
    return (
      <CardMainConteiner>
        <StyledLink to={linkUrl}>
          <CardWrapper>
            <CardImage src={imageUrl} alt={title} />
          </CardWrapper>
          <CardTitle>{title}</CardTitle>
        </StyledLink>
      </CardMainConteiner>
    );
};
  
export default Card;