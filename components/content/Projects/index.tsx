import React from 'react';
import {Section, Grid, ProjectCard} from "@ui";
import {ProjectInfo} from "@constants";

export const Projects = () => (
    <Section>
        <h2>Projects</h2>
        <Grid>
            {
                ProjectInfo.map((project, idx) => (
                    <ProjectCard key={idx}
                                 {...project} />
                ))
            }
        </Grid>
    </Section>
)