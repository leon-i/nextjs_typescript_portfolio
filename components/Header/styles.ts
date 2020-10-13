import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em 2em;
    color: #fff;
    background: #000b21;
`;

export const NavLinks = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    a {
        margin: 0 0.5em;
        transition: ease-in-out 0.2s
    }
    
    a:hover {
        color: #ea2e6d;
        transition: ease-in-out 0.2s
    }
`;