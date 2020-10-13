import React from 'react';
import Link from 'next/link'
import {StyledHeader, NavLinks} from "./styles";

export const Header : React.FC = () => (
    <StyledHeader>
        <h3>:)</h3>
        <NavLinks>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </NavLinks>
    </StyledHeader>
)