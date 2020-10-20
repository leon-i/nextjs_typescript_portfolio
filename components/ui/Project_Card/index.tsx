import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Wrapper, InnerWrapper, Flex, Icons, Skills } from "./styles";
import { Project as Props } from "../../../interfaces";

export const ProjectCard : React.FC<Props> = ({ name,
description,
skills,
imgPath,
alt,
githubUrl,
liveUrl}) => (
    <Wrapper backgroundUrl={imgPath}>
        <span role='img' aria-label={alt} className='background-img' />
        <InnerWrapper>
            <Flex>
                <h4>{name}</h4>
                <Icons>
                    <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} style={{marginTop: '-2px'}} />
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