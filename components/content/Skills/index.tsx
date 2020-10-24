import React from 'react';
import {DiJsBadge, DiRuby, DiReact, DiHtml5, DiCss3 } from 'react-icons/di';
import {SiTypescript,
SiGo,
SiRedux,
SiVueDotJs,
SiWebpack,
SiRails,
SiPostgresql,
SiMongodb,
SiHeroku,
SiNetlify} from 'react-icons/si';
import {FaNodeJs, FaAws, FaGitAlt} from 'react-icons/fa';
import {ListWrapper, List} from "./styles";
import {Section, Skill} from "@ui";

export const Skills : React.FC = () => (
    <Section>
        <h2>Skills</h2>
        <ListWrapper>
            <List style={{ borderRadius: '2px 2px 0 0' }}>
                <h4>Languages</h4>
                <Skill>
                    <DiJsBadge title='JavaScript' />
                    <p>JavaScript</p>
                </Skill>
                <Skill>
                    <SiTypescript title='TypeScript' />
                    <p>TypeScript</p>
                </Skill>
                <Skill>
                    <DiRuby title='Ruby' />
                    <p>Ruby</p>
                </Skill>
                <Skill>
                    <SiGo title='Go' />
                    <p>Go</p>
                </Skill>
            </List>
            <List secondary>
                <h4>Frontend</h4>
                <Skill>
                    <DiReact title='React' />
                    <p>React</p>
                </Skill>
                <Skill>
                    <SiRedux title='Redux' />
                    <p>Redux</p>
                </Skill>
                <Skill>
                    <SiVueDotJs title='Vue.js' />
                    <p>Vue.js</p>
                </Skill>
                <Skill>
                    <DiHtml5 title='HTML5' />
                    <p>HTML5</p>
                </Skill>
                <Skill>
                    <DiCss3 title='CSS3' />
                    <p>CSS3</p>
                </Skill>
                <Skill>
                    <SiWebpack title='Webpack' />
                    <p>Webpack</p>
                </Skill>
            </List>
            <List>
                <h4>Backend</h4>
                <Skill>
                    <SiRails title='Rails' />
                    <p>Rails</p>
                </Skill>
                <Skill>
                    <img src='/expressjs.svg'
                         alt='expressjs-icon'
                         height='64'
                         width='64' />
                    <p>Express</p>
                </Skill>
                <Skill>
                    <FaNodeJs title='Node.js' />
                    <p>Node.js</p>
                </Skill>
                <Skill>
                    <SiPostgresql title='PostgreSQL' />
                    <p>PostgreSQL</p>
                </Skill>
                <Skill>
                    <SiMongodb title='MongoDB' />
                    <p>MongoDB</p>
                </Skill>
                <Skill>
                    <FaAws title='AWS' />
                    <p>AWS</p>
                </Skill>
            </List>
            <List secondary style={{ borderRadius: '0 0 2px 2px' }}>
                <h4>Other</h4>
                <Skill>
                    <FaGitAlt title='Git' />
                    <p>Git</p>
                </Skill>
                <Skill>
                    <SiHeroku title='Heroku' />
                    <p>Heroku</p>
                </Skill>
                <Skill>
                    <SiNetlify title='Netlify' />
                    <p>Netlify</p>
                </Skill>
            </List>
        </ListWrapper>
    </Section>
);