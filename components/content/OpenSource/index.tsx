import React from 'react';
import { Grid } from "./styles";
import { Section, GithubCard } from "../../ui";
import { OpenSourceProps as Props } from "../../../interfaces";

export const OpenSource : React.FC<Props> = ({ covidWatchPortal,
fightPandemics,
covidWatchWebsite }) => {
    return (
        <Section>
            <h2>Open Source Contributions</h2>
            <Grid>
                <GithubCard {...covidWatchPortal} />
                <GithubCard {...Object.assign({},
                    fightPandemics,
                        { description: 'FightPandemics was born to make communities ' +
                                'more resilient to pandemics by facilitating access to information ' +
                                'and coordinated responses.'})} />
                <GithubCard {...covidWatchWebsite} />
            </Grid>
        </Section>
    )
}