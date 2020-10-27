import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    min-height: 240px;
    width: 100%;
    padding: 1em;
    color: #fff;
    background: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 2px;
    box-shadow: 5.5px 5.5px 0px 0px rgba(0,0,0,0.8);
    overflow: hidden;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    
    &:hover {
        border-right: 1px solid rgba(0, 0, 0, 0.8);
        border-bottom: 1px solid rgba(0, 0, 0, 0.8);
        box-shadow: 3.5px 3.5px 0px 0px rgba(0,0,0,0.8);
        transition: ease-in-out 0.2s;
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    img {
        height: 100%;
        min-height: 240px;
        width: 100%;
        object-position: 20% 50%;
        object-fit: cover;
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34));
    }
`;

export const InnerWrapper = styled.div`
    position: relative;
    height: 100%;
    
    h3 {
        padding: 0.2em 0.5em 0.32em 0.5em;
        background: #6258e6;
        border-radius: 2px;
    }
    
    h3::after {
        content: '';
        display: block;
        border-bottom: 2px solid #fff;
    }
        
    p {
        flex: 1 auto;
        font-size: 0.825em;
        line-height: 18px;
        padding: 0.2em 0.5em;
        background: #6258e6;
        border-radius: 2px;
        opacity: 0.9;
    }
    
    @media (max-width: 992px) {
        p {
            font-size: 0.875em;
            line-height: 20px;
        }
    }
`

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icons = styled.div`
    position: relative;
    z-index: 2;
    
    svg {
        font-size: 1.5em;
        margin-left: 0.5em;
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