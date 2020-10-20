import React from 'react';
import { Grid } from "./styles";
import { Section, GithubCard } from "../../ui";
import { OpenSourceProps as Props } from "../../../interfaces";

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
            <Grid>
                <GithubCard {...covidWatchPortal} />
                <GithubCard {...fpShort} />
                <GithubCard {...covidWatchWebsite} />
            </Grid>
        </Section>
    )
}