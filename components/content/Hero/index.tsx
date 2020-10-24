import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Flex, Wrapper, Buttons, Image } from "./styles";
import { Button } from "@ui";
import { SocialLinks } from "@constants";

export const Hero : React.FC = () => (
    <Flex>
        <Wrapper>
            <h1>Hi, my name is Isak Leon.</h1>
            <p>
                I am a software engineer based in New York, NY.
                I have experience building web apps using React, Redux, Ruby on Rails, and JavaScript.
                I am passionate about creating projects and writing code that I can be proud of.
            </p>
            <Buttons>
                <Button>Resume</Button>
                <Button secondary href={SocialLinks.github} target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                    Github
                </Button>
            </Buttons>
        </Wrapper>
            <Image src='/developer.svg' alt='developer-img' height='200' width='480' />
    </Flex>
);