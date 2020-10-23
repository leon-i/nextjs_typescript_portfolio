import React from 'react';
import {FaLinkedin, FaAngellist, FaGithub} from "react-icons/fa";
import {StyledFooter, SocialNav} from "./styles";
import {SocialLinks} from '@constants';

export const Footer : React.FC = () => (
    <StyledFooter>
        <span>© Isak Leon 2020</span>
        <SocialNav>
            <a href={SocialLinks.linkedIn} target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a href={SocialLinks.angelList} target='_blank' rel='noopener noreferrer'>
                <FaAngellist />
            </a>
            <a href={SocialLinks.github} target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </a>
        </SocialNav>
    </StyledFooter>
);