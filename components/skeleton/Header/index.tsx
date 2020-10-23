import React from 'react';
import Link from 'next/link'
import {StyledHeader, Logo, NavLinks} from "./styles";
import {Emoji} from '@ui';

export const Header : React.FC = () => (
    <StyledHeader>
        <Logo>
            <Emoji label={'lion'} symbol={'🦁'} />
            <span>Isak Leon</span>
        </Logo>
        <NavLinks>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </NavLinks>
    </StyledHeader>
)