import React from 'react';
import styled from 'styled-components';
import { Layout } from "@skeleton";
import { Section, ContactForm, Button } from "@ui";

const Wrapper = styled(Section)`
    padding: calc(3.5em + 70px) 4em 3.5em 4em;
    margin-bottom: 0;
    
    @media (max-width: 576px) {
        padding: calc(4em + 70px) 2em 4em 2em;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    p {
        width: 50%;
    }
    
    p:first-of-type {
        margin-right: 1em;
    }
    
    p:last-of-type {
        margin-left: 1em;
    }
    
    @media (max-width: 576px) {
        flex-direction: column;
        
        p:first-of-type, p:last-of-type {
            width: 100%;
            margin: 1em 0 1em 0;
        }
    }
`;

const FormHeader = styled.p`
    font-weight: bold;
    margin-bottom: 0;
`;

export default function Contact() {
    return (
        <Layout>
            <Wrapper>
                <h1>Contact</h1>
                <ContactForm name="contact" action="/success" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <FormHeader>If you'd like to get in touch, send me a message!</FormHeader>
                    <Flex>
                        <p>
                            <label htmlFor="yourname">
                                Name:
                            </label> <br />
                            <input type="text" name="name" id="yourname" required />
                        </p>
                        <p>
                            <label htmlFor="youremail">
                                Email:
                            </label> <br />
                            <input type="email" name="email" id="youremail" required />
                        </p>
                    </Flex>
                    <p>
                        <label htmlFor="yourmessage">
                            Message:
                        </label> <br />
                        <textarea name="message" id="yourmessage" required />
                    </p>
                    <p>
                        <Button type="submit">Send</Button>
                    </p>
                </ContactForm>
            </Wrapper>
        </Layout>
    )
}