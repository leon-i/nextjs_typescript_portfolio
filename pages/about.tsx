import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import { Layout } from "@skeleton";
import { Section } from "@ui";
import { SocialLinks } from "@constants";

const Wrapper = styled(Section)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: calc(4em + 70px) 4em 4em 4em;
    margin-bottom: 0;
    
    img {
        border-right: 1px solid rgba(0, 0, 0, 0.7);
        border-bottom: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 2px;
        box-shadow: 5.5px 5.5px 0px 0px rgba(0,0,0,0.8);
    }
    
    @media (max-width: 992px) {
        flex-direction: column-reverse;
        align-items: center;
        
        img {
            flex-order: 0;
            height: 230px;
            width: 250px;
            margin-bottom: 2em;
        }
    }
    
    @media (max-width: 576px) {
        padding: calc(4em + 70px) 2em 4em 2em;
    }
`;

const Info = styled.div`
    width: 55%;
    
    p {
        line-height: 24px;
    }
    
    @media (max-width: 992px) {
        width: 100%;
    }
`;

const Social = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    a {
        font-size: 1.2em;
        font-weight: bold;
        margin-right: 2em;
        color: #e8175d;
        
        svg {
            display: inline-block;
            width: 1em;
            font-size: inherit;
            height: 1em;
            overflow: visible;
            vertical-align: -0.125em;
            margin-right: 0.2em;
        }
        
        &:hover {
            opacity: 0.7;
        }
    }
    
    @media (max-width: 576px) {
        a:last-of-type {
            margin-top: 1em;
        }
    }
`;

export default function About() {
    return (
        <Layout>
            <Wrapper>
                <Info>
                    <h1>About me</h1>
                    <p>My name is Isak Leon and I'm a fullstack software engineer based in New York.</p>
                    <p>
                        I love building web applications, and have experience working with React, Redux, Ruby on Rails, and
                        Node.js. Currently, my favorite languages to develop in  are TypeScript and Go.
                    </p>
                    <p>
                        After graduating from SUNY Geneseo, I attended App Academy's fullstack web development course. Since then,
                        I've been contributing to projects such as Covid Watch and FightPandemics.
                    </p>
                    <h2>Find me on:</h2>
                    <Social>
                        <a href={SocialLinks.linkedIn}
                               target='_blank'
                               rel='noopener noreferrer'
                               aria-label='about-linkedin-link'>
                            <FaLinkedin />
                            LinkedIn
                        </a>
                        <a href={SocialLinks.angelList}
                           target='_blank'
                           rel='noopener noreferrer'
                           aria-label='about-angellist-link'>
                            <FaAngellist />
                            AngelList
                        </a>
                        <a href={SocialLinks.github}
                           target='_blank'
                           rel='noopener noreferrer'
                           aria-label='about-github-link'>
                            <FaGithub />
                            Github
                        </a>
                    </Social>
                </Info>
                <picture>
                    <source srcSet={'/profile_picture.webp'} type='image/webp' />
                    <img src='/profile_picture.jpg' alt='profile-picture' height='370px' width='400px' />
                </picture>
            </Wrapper>
        </Layout>
    )
}