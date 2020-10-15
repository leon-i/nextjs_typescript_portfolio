import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    min-height: 240px;
    width: 100%;
    padding: 1em;
    color: #fff;
    background: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.35);
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    border-radius: 2px;
    opacity: 1;
    box-shadow: 5.5px 5.5px 0px 0px rgba(0,0,0,0.8);
    
    h4 {
        padding: 0.2em 0.5em 0.32em 0.5em;
        background: #6258e6;
        border-radius: 2px;
    }
    
    h4::after {
        content: '';
        display: block;
        border-bottom: 2px solid #fff;
    }
        
    p {
        display: inline-block;
        width: 95%;
        font-size: 0.825em;
        padding: 0.2em 0.5em;
        background: #6258e6;
        border-radius: 2px;
        opacity: 0.9;
    }
    
    ${props => props.backgroundUrl && `
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-image: url(${props.backgroundUrl}), 
                linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34));
            background-size: cover;
            background-position: 20% 50%;
            background-blend-mode: darken;
        }
    `}
`;

export const InnerWrapper = styled.div`
    position: relative;
    z-index: 100;
    height: 100%;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    svg {
        font-size: 20px;
        margin-left: 0.7em;
        transition: ease-in-out 0.2s;
        
        &:hover {
            color: #e8175d;
            transition: ease-in-out 0.2s;
        }
    }
`

export const Skills = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    
    span {
        font-size: 0.875em;
        margin: 0.5em 0.2em 0em 0.2em;
        padding: 0.2em 0.5em;
        border-radius: 2px;
        background: #e8175d;
    }
`;