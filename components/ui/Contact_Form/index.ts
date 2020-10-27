import styled from 'styled-components';

export const ContactForm = styled.form`
    padding: 0 8em;
    
    input, textarea {
        width: 100%;
        padding: 1em;
        margin-top: 0.5em;
        background: rgba(0, 0, 0, 0.025);
        border: 1px solid #6258e6;
        border-radius: 2px;
    }
    
    textarea {
        min-height: 120px;
    }
    
    @media (max-width: 992px) {
        padding: 0 2em;
    }
    
    @media (max-width: 576px) {
        padding: 0;
    }
`;