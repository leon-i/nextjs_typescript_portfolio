import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    height: 200px;
    min-width: 0;
    padding: 1em;
    background: rgba(0, 0, 0, 0.025);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    box-shadow: 5.5px 5.5px 0px 0px rgba(0,0,0,0.8);
    transition: ease-in-out 0.1s;
    cursor: pointer;
    
    img {
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        padding: 0.5em;
        border-radius: 0px 2px 0px 2px;
    }
    
    &:hover {
        border: 1px solid transparent;
        box-shadow: 3.5px 3.5px 0px 0px rgba(0,0,0,0.8);
        transition: ease-in-out 0.1s;
    }
`;

export const InnerWrapper = styled.div`
    position: relative;
    height: 100%;
    
    h3 {
        max-width: 92%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    p {
        width: 95%;
        font-size: 0.875em;
        line-height: 20px;
        margin-top: calc(1em - 1px)
    }
`;

export const Icons = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 0;
    
    a {
        margin-right: 1em;
        transition: ease-in-out 0.1s;
        
        &:hover > span, &:hover > svg {
            color: #e8175d;
            transition: ease-in-out 0.1s;
        }
    }
    
    span {
        margin-left: 0.25em;
    }
    
    svg {
        display: inline-block;
        width: 1.125em;
        font-size: inherit;
        height: 1em;
        overflow: visible;
        vertical-align: -0.125em;
    }
`;

export const Framework = styled.span`
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: bold;
    font-size: 0.875em;
    color: #6258e6;
`;