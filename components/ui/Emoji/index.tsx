import React from 'react';
import Link from 'next/link';
import {StyledEmoji} from "./styles";

interface Props {
    label : string;
    symbol : string;
}

export const Emoji : React.FC<Props> = ({ label, symbol }) => (
    <Link href='/'>
        <StyledEmoji role='img' aria-label={label}>
            {symbol}
        </StyledEmoji>
    </Link>
);