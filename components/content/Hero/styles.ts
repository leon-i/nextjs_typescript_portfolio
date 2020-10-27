import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4em 0;
    max-width: 980px;
    margin: 70px auto 0px auto;
    
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        margin: 70px 0 0 0;
        padding: 4em;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    p {
        width: 90%;
        line-height: 22px;
        margin-top: calc(1em - 2px);
        opacity: 0.65;
    }
    
    @media (max-width: 992px) {
        align-items: center;
        
        p {
            width: 100%;
            text-align: center;
        }
    }
    
    @media (max-width: 576px) {
        h1 {
            text-align: center;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 65%;
    
    svg {
        margin-right: 0.2em;
    }
    
    @media (max-width: 992px) {
        width: 50%;
    }
    
    @media (max-width: 576px) {
        flex-direction: column;
        width: 100%;
        
        a:first-of-type {
            margin-bottom: 1em;
        }
    }
`

export const Image = styled.img`
    min-height: 200px;
    min-width: 480px;
    margin-top: 12px;
    
    @media (max-width: 992px) {
        margin-top: 2em;
        margin-left: 0;
    }
    
    @media (max-width: 576px) {
        display: none;
    }
`;