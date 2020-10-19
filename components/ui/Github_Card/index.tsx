import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, InnerWrapper, Icons } from "./styles";
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
        <img src={avatarUrl} alt={`${name.split('/').join('-')}-avatar`} />
        <InnerWrapper>
                <h4>{name}</h4>
                <p>{description}</p>
                <Icons>
                        <a href={starsUrl} target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faStar} />
                                <span>{stars}</span>
                        </a>
                        <a href={forksUrl} target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faCodeBranch} style={{marginTop: '-2px'}} />
                                <span>{forks}</span>
                        </a>
                </Icons>
        </InnerWrapper>
        <a href={url} target='_blank' rel='noopener noreferrer' className='card-link' />
    </Wrapper>
)