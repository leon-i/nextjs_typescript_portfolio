import React from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import { Wrapper, InnerWrapper, Icons, Framework } from "./styles";
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
                <h4>{name}</h4>
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
        <a href={url} target='_blank' rel='noopener noreferrer' className='card-link' />
    </Wrapper>
)