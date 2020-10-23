import styled from 'styled-components';

export const ListWrapper = styled.div`
    max-width: 980px;
    margin: 0 auto;
    border-radius: 2px;
    background: transparent;
    box-shadow: 7px 7px 0px 0px rgba(0,0,0,0.8);
`;

export const List  = styled.ul`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 2em 3em 1em 3em;
    margin: 0;
    background: rgba(0, 0, 0, 0.05);
    
    h4 {
        position: absolute;
        top: 1em;
        left: 1em;
        color: #000;
    }
    
    h4::after {
        content: '';
        display: block;
        border-bottom: 2.5px solid #000;
    }
    
    svg, p {
        color: #e8175d;
    }
    
    ${props => props.secondary && `
        background: #6258e6;
        
        h4, svg, p {
            color: #fff;
        }
        
        h4::after {
            border-bottom: 2.5px solid #fff;
        }
    `}
`;