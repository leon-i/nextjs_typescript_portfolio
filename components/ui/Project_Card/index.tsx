import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Wrapper, ImageWrapper, InnerWrapper, Flex, Icons, Skills } from "./styles";
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
                <source srcSet={`${imgPath}.webp`} />
                <img src={`${imgPath}.jpg`} alt={alt} height='240' width='480' />
            </picture>
        </ImageWrapper>
        <InnerWrapper>
            <Flex>
                <h4>{name}</h4>
                <Icons>
                    <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                        <FaGithub />
                    </a>
                    <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
                        <FaExternalLinkAlt style={{marginTop: '-2px'}} />
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
        <a href={liveUrl} target='_blank' rel='noopener noreferrer' className='card-link' />
    </Wrapper>
)