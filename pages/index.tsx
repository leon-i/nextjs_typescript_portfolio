import React from 'react';
import { Layout } from "../components/skeleton";
import { Hero, Projects, OpenSource } from "../components/content";
import {GithubResponse} from "../interfaces";

interface Props {
    covidWatch: GithubResponse;
    fightPandemics: GithubResponse;
}

export default function Home({ covidWatch, fightPandemics } : Props) {
  return (
      <Layout>
        <Hero />
        <Projects />
        <OpenSource covidWatch={covidWatch} fightPandemics={fightPandemics} />
      </Layout>
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
