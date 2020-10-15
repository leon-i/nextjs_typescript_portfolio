import React from 'react';
import {Layout} from "../components/skeleton";
import {Hero, Projects} from "../components/content";

export default function Home() {
  return (
      <Layout>
        <Hero />
        <Projects />
      </Layout>
  )
}
