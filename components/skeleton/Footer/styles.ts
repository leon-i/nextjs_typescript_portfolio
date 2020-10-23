import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 0 4em;
    color: #fff;
    background: #6258e6;
    
    span {
        font-size: 1.1em;
    }
    
    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: flex-start;
        height: 110px;
        padding: 1em 4em;
        
        span {
            margin-bottom: 1em;
        }
    }
`;

export const SocialNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    svg {
        font-size: 2em;
        margin-left: 1em;
        transition: ease-in-out 0.2s;
        
        &:hover {
            color: #e8175d;
            transition: ease-in-out 0.2s;
        }
    }
    
    @media (max-width: 576px) {
        svg {
            margin: 0 0.5em;
        }
    }
`;