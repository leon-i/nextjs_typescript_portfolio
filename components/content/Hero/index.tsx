import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Flex, Wrapper, Buttons, ImageWrapper } from "./styles";
import { Button } from "@ui";

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
                <Button secondary>
                    <FaGithub />
                    Github
                </Button>
            </Buttons>
        </Wrapper>
        <ImageWrapper>
            <img src='/developer.svg' alt='developer-img' />
        </ImageWrapper>
    </Flex>
);