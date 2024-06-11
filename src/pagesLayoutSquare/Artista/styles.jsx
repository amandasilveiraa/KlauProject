import styled from 'styled-components';

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 7vw;
    margin-right: 7vw;
    margin-top: 2vw;
    padding-top: 25vh;
`;


// flex: 1 1 calc(33.333% - 40px); /* Aproximadamente 1/3 da largura menos a margem */
// max-width: calc(33.333% - 40px); /* Garante que o máximo seja 1/3 da largura menos a margem */

// @media (max-width: 768px) {
// flex: 1 1 100%; /* Uma coluna em telas muito pequenas */
// max-width: 100%;
// }