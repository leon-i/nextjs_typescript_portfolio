import React from 'react';
import { Grid } from "./styles";
import { Section, GithubCard } from "../../ui";
import { GithubResponse } from "../../../interfaces";

interface Props {
    covidWatch: GithubResponse;
    fightPandemics: GithubResponse;
}

export const OpenSource : React.FC<Props> = ({ covidWatch, fightPandemics }) => {
    return (
        <Section>
            <Grid>
                <GithubCard {...covidWatch} />
                <GithubCard {...fightPandemics} />
            </Grid>
        </Section>
    )
}