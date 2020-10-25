import React from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import { Wrapper, InnerWrapper, Icons, Framework } from "./styles";
import { CardLink } from "../Card_Link";
import { GithubResponse as Props } from "@interfaces";

export const GithubCard : React.FC<Props> = ({ name,
description,
avatarUrl,
url,
stars,
forks,
starsUrl,
forksUrl,
framework}) => (
    <Wrapper>
        <img
            src={avatarUrl}
            alt={`${name.split('/').join('-')}-avatar`}
            height='40'
            width='40' />
        <InnerWrapper>
                <h3>{name}</h3>
                <p>{description}</p>
                <Icons>
                        <a href={starsUrl} target='_blank' rel='noopener noreferrer'>
                                <FaStar />
                                <span>{stars}</span>
                        </a>
                        <a href={forksUrl} target='_blank' rel='noopener noreferrer'>
                                <FaCodeBranch />
                                <span>{forks}</span>
                        </a>
                </Icons>
                <Framework>{framework}</Framework>
        </InnerWrapper>
        <CardLink href={url} target='_blank' rel='noopener noreferrer' aria-label={`${name}-live-big`} />
    </Wrapper>
)