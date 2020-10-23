import styled from 'styled-components';

export const Skill = styled.li` 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5em;
    color: #fff;
    
    svg, img {
        height: 64px;
        width: 64px;
        margin: 0 auto;
    }
    
    p {
        font-size: 0.875em;
        margin: 0.5em 0 0 0;
    }
    
    @media (max-width: 576px) {
        margin-top: 1em;
        
        svg, img {
            height: 56px;
            width: 56px;
        }
    }
`;