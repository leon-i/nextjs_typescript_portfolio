import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 8fr;
    gap: 1.2rem 1.2rem;
    width: 100%;
    
    @media (min-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;