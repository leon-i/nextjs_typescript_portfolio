import React from 'react';
import { Layout } from "@skeleton";
import { Hero, Projects, OpenSource, Skills } from "@content";
import { GithubResponse, OpenSourceProps as Props } from "@interfaces";

export default function Home(props : Props) {
  return (
      <Layout>
        <Hero />
        <Projects />
        <OpenSource {...props} />
        <Skills />
      </Layout>
  )
};

const formatResponse = (res : any, framework : string) : GithubResponse => ({
    name: res.full_name,
    description: res.description,
    avatarUrl: res.owner.avatar_url,
    url: res.html_url,
    stars: res.stargazers_count,
    forks: res.forks_count,
    starsUrl: `${res.html_url}/stargazers`,
    forksUrl: `${res.html_url}/network/members`,
    framework
});

export async function getStaticProps() {
    const githubToken = process.env.GITHUB_TOKEN;
    const headers = new Headers({
        Authorization: `token ${githubToken}`
    });

    const [covidWatchRes, fightPandemicsRes, covidWatchRes2] = await Promise.all([
        fetch('https://api.github.com/repos/covidwatchorg/portal', { headers })
            .then(res => res.json()),
        fetch('https://api.github.com/repos/FightPandemics/FightPandemics', { headers })
            .then(res => res.json()),
        fetch('https://api.github.com/repos/covidwatchorg/website', { headers })
            .then(res => res.json())
    ]);

    return {
        props: {
            covidWatchPortal: formatResponse(covidWatchRes, 'React'),
            fightPandemics: formatResponse(fightPandemicsRes, 'React'),
            covidWatchWebsite: formatResponse(covidWatchRes2, 'Vue')
        }
    }
};
