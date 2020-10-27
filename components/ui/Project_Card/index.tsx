import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Wrapper, ImageWrapper, InnerWrapper, Flex, Icons, Skills } from "./styles";
import { CardLink } from "../Card_Link";
import { Project as Props } from "@interfaces";

export const ProjectCard : React.FC<Props> = ({ name,
description,
skills,
imgPath,
alt,
githubUrl,
liveUrl}) => (
    <Wrapper>
        <ImageWrapper>
            <picture>
                <source srcSet={`${imgPath}.webp`} type='image/webp' />
                <img src={`${imgPath}.jpg`} alt={alt} height='240' width='480' />
            </picture>
        </ImageWrapper>
        <InnerWrapper>
            <Flex>
                <h3>{name}</h3>
                <Icons>
                    <a href={githubUrl}
                       target='_blank'
                       rel='noopener noreferrer'
                       aria-label={`${name}-github`}>
                        <FaGithub />
                    </a>
                </Icons>
            </Flex>
            <p>{description}</p>
            <Skills>
                {
                    skills.map((skill, idx) => (
                        <span key={idx}>{skill}</span>
                    ))
                }
            </Skills>
        </InnerWrapper>
        <CardLink href={liveUrl} target='_blank' rel='noopener noreferrer' aria-label={`${name}-live`} />
    </Wrapper>
)