import React from 'react';
import Head from 'next/head';
import {GlobalStyle, Main} from "./styles";
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
            <meta name="theme-color" content="#fff" />
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta property='og:title' content='Isak Leon | Software Engineer' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://www.isakleon.com/' />
            <meta property='og:image' content="/site.jpg" />
            <meta property='og:description'
                  content='Isak Leon | Software Engineer | Portfolio' />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel='manifest' href='/manifest.json' />
        </Head>
        <GlobalStyle />
        <Main>
            <Header />
                {children}
            <Footer />
        </Main>
    </>
)