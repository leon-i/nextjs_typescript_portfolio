import React from 'react';
import { Wrapper } from "./styles";
import { GithubResponse as Props } from "../../../interfaces";

export const GithubCard : React.FC<Props> = ({ name,
description,
avatarUrl,
url,
stars,
forks,
starsUrl,
forksUrl }) => (
    <Wrapper>
        <h4>{name}</h4>
        <p>{description}</p>
        <img src={avatarUrl} alt={`${name.split('/').join('-')}-avatar`} />
        <p>{stars}</p>
        <p>{forks}</p>
    </Wrapper>
)