import React, { useRef, useState } from "react";
import Head from "next/head";
import { Card, CardProps } from "../components/Card";
import styles from "../styles/skill.module.css";
import { SkillCard } from "../components/SkillCard";
import { Container } from "../components/Container";
import { FadeSlideToRight } from "../components/FadeSlideToRight";

function Skill({ skills }) {
  return (
    <Container>
      <div className="flex align-center justify-center">
        <Head>
          <title>Skill</title>
          <link rel="icon" href="./profile.png" />
        </Head>
        <main className={styles.skillMain}>
          {skills?.map((skill, i: number) => {
            return (
              <FadeSlideToRight delayInSecond={0.25 * i}>
                <SkillCard title={skill.title} thumbnail={skill.thumbnail} />
              </FadeSlideToRight>
            );
          })}
        </main>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/skill`);
    const data = await res.json();
    if (!data?.data) {
      return {
        skills: [],
      };
    }

    console.log("skill: ", data);
    return {
      props: {
        skills: data?.data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        skills: [],
      }, // will be passed to the page component as props
    };
  }
}

export default Skill;
