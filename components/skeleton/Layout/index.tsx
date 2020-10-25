import React from 'react';
import {GlobalStyle} from "./styles";
import {Header} from '../Header';
import {Footer} from "../Footer";

interface  Props {
    children : React.ReactNode;
}

export const Layout : React.FC<Props> = ({ children }) => (
    <>
        <GlobalStyle />
        <Header />
            {children}
        <Footer />
    </>
)