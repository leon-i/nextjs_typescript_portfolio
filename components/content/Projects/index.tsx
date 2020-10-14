import React from 'react';
import {Wrapper, Grid} from "./styles";
import {ProjectCard, Button} from "../../ui";
import {projects, Project} from "./projects";

export const Projects = () => (
    <Wrapper>
        <h2>Projects</h2>
        <Grid>
            {
                projects.map((project : Project) => (
                    <ProjectCard name={project.name}
                                 description={project.description}
                                 skills={project.skills}
                                 imgPath={project.imgPath}
                                 alt={project.alt}
                                 githubUrl={project.githubUrl}
                                 liveUrl={project.liveUrl} />
                ))
            }
        </Grid>
    </Wrapper>
)