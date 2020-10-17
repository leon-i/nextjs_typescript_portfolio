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
                                 name={project.name}
                                 description={project.description}
                                 skills={project.skills}
                                 imgPath={project.imgPath}
                                 alt={project.alt}
                                 githubUrl={project.githubUrl}
                                 liveUrl={project.liveUrl} />
                ))
            }
        </Grid>
    </Section>
)