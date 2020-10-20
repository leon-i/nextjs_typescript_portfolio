import React from 'react';
import {Grid} from "./styles";
import {Section, ProjectCard} from "../../ui";
import {projects} from "./projects";

export const Projects = () => (
    <Section>
        <h2>Projects</h2>
        <Grid>
            {
                projects.map((project, idx) => (
                    <ProjectCard key={idx}
                                 {...project} />
                ))
            }
        </Grid>
    </Section>
)