import styled from 'styled-components';

// Estilos para o footer
export const FooterWrapper = styled.footer`
    padding: 5vh 16vw; /* Espaçamento interno com margens nos extremos */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column; /* Coluna em dispositivos menores */
        align-items: center; /* Alinhar itens ao centro */
    }
`;

export const DireitosAutorais = styled.div`
    color: #999; /* Cor do texto dos direitos autorais */
    font-size: 14px; /* Tamanho do texto dos direitos autorais */
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: row; /* Linha em dispositivos menores */
        margin-top: 10px; /* Espaçamento superior */
    }

`;

export const Icon = styled.img`
    width: 22px; /* Tamanho do ícone */
    height: 22px;
    cursor: pointer;
    margin-right: 3vw; /* Espaçamento entre os ícones */

    @media (max-width: 768px) {
        margin-bottom: 10px; /* Espaçamento inferior em dispositivos menores */
    }
`;