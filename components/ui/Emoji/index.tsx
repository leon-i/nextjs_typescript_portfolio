import React from 'react';
import {StyledEmoji} from "./styles";

interface Props {
    label : string;
    symbol : string;
}

export const Emoji : React.FC<Props> = ({ label, symbol }) => (
    <StyledEmoji role='img' aria-label={label}>
        {symbol}
    </StyledEmoji>
);