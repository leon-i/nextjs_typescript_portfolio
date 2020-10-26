import React from 'react';
import Head from 'next/head';
import {GlobalStyle} from "./styles";
import {Header} from '../Header';
import {Footer} from "../Footer";

interface  Props {
    children : React.ReactNode;
}

export const Layout : React.FC<Props> = ({ children }) => (
    <>
        <Head>
            <title>Isak Leon | Software Engineer</title>
            <meta name="description"
                  content="Isak Leon | Software Engineer | Portfolio"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <link rel='manifest' href='/manifest.json' />
        </Head>
        <GlobalStyle />
        <Header />
            {children}
        <Footer />
    </>
)