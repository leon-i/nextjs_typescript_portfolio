import React from 'react';
import styled from 'styled-components';
import { Layout } from "@skeleton";
import { Section } from "@ui";
import Link from 'next/link';

const Wrapper = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: calc(3.5em + 70px) 4em 3.5em 4em;
    margin-top: 4em;
    
    a {
        font-size: 1.2em;
        font-weight: bold;
        margin-top: 2em;
        color: #e8175d;
        
        &:hover {
            opacity: 0.7;
        }
    }
    
    @media (max-width: 576px) {
        padding: calc(4em + 70px) 1em 4em 1em;
    }
`

export default function Success() {
    return (
        <Layout>
            <Wrapper>
                <h1>Success! I'll get back to you as soon as I can.</h1>
                <Link href='/'>Wanna go back to the main page?</Link>
            </Wrapper>
        </Layout>
    )
}