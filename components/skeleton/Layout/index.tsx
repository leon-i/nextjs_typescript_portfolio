import React from 'react';
import {GlobalStyle} from "./styles";
import {Header} from '../Header';
import {Footer} from "../Footer";
import {SEO} from '../SEO';

interface  Props {
    children : React.ReactNode;
}

export const Layout : React.FC<Props> = ({ children }) => (
    <>
        <GlobalStyle />
        <SEO />
        <Header />
            {children}
        <Footer />
    </>
)