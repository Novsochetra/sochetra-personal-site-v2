import React, { useRef, useState } from "react";
import Head from "next/head";
import { Card, CardProps } from "../components/Card";
import styles from "../styles/skill.module.css";
import { MyProfile } from "../components/MyProfile";
import { SkillCard } from "../components/SkillCard";

function Skill({ skills }) {
  return (
    <div className={styles.skillContainer}>
      <Head>
        <title>Skill</title>
        <link rel="icon" href="./profile.png" />
      </Head>
      <main className={styles.skillMain}>
        <div className={styles.skillWrapper}>
          {skills?.map((skill, i: number) => {
            return (
              <div>
                <SkillCard title={skill.title} thumbnail={skill.thumbnail} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/skill`);
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
}

export default Skill;
