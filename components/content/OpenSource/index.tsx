import React from 'react';
import { Grid } from "./styles";
import { Section } from "../../ui";
import { GithubResponse } from "../../../interfaces";

interface Props {
    covidWatch : GithubResponse;
    fightPandemics : GithubResponse;
}

export const OpenSourceProjects : React.FC<Props> = ({ covidWatch, fightPandemics }) => {
    return (
        <Section>

        </Section>
    )
}

export async function getStaticProps() {
    const covidWatchRes = await fetch('https://api.github.com/repos/covidwatchorg/portal')
        .then(res => res.json());
    const fightPandemicsRes = await fetch('https://api.github.com/repos/FightPandemics/FightPandemics')
        .then(res => res.json());

    return {
        props: {
            covidWatch: {
                name: covidWatchRes.full_name,
                description: covidWatchRes.description,
                avatarUrl: covidWatchRes.owner.avatar_url,
                url: covidWatchRes.html_url,
                stars: covidWatchRes.stargazers_count,
                forks: covidWatchRes.forks_count,
                starsUrl: covidWatchRes.stargazers_url,
                forksUrl: covidWatchRes.forks_url
            },
            fightPandemics: {
                name: fightPandemicsRes.full_name,
                description: fightPandemicsRes.description,
                avatarUrl: fightPandemicsRes.owner.avatar_url,
                url: fightPandemicsRes.html_url,
                stars: fightPandemicsRes.stargazers_count,
                forks: fightPandemicsRes.forks_count,
                starsUrl: fightPandemicsRes.stargazers_url,
                forksUrl: fightPandemicsRes.forks_url
            }
        }
    }
}