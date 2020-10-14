import styled from 'styled-components';

export const Button  = styled.button`
    min-width: 140px;
    font-size: 1.1em;
    padding: 0.8em 1.8em;
    color: #fff;
    background: #e8175d;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    box-shadow: 5.5px 5.5px 0px 0px rgba(0,0,0,0.8);
    transition: ease-in-out 0.2s;
    cursor: pointer;
    
    &:hover {
        border: 1px solid transparent;
        opacity: 0.84;
        box-shadow: 3.5px 3.5px 0px 0px rgba(0,0,0,0.8);
        transition: ease-in-out 0.2s;
    }
    
    ${props => props.secondary && `
        background: #6258e6;
    `}
`;