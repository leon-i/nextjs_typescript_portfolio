import React from 'react';
import { Section, Grid, GithubCard } from "@ui";
import { OpenSourceProps as Props } from "@interfaces";

export const OpenSource : React.FC<Props> = ({ covidWatchPortal,
fightPandemics,
covidWatchWebsite }) => {
    const fpShort = {
        ...fightPandemics,
        description: 'FightPandemics was born to make communities ' +
            'more resilient to pandemics by facilitating access to information ' +
            'and coordinated responses.'
    }

    return (
        <Section>
            <h2>Open Source</h2>
            <Grid max={3}>
                <GithubCard {...covidWatchPortal} />
                <GithubCard {...fpShort} />
                <GithubCard {...covidWatchWebsite} />
            </Grid>
        </Section>
    )
}