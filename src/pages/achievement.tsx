import React from "react";
import Head from "next/head";
import { AchievementCard } from "../components/AchievementCard";
import { FadeSlideToRight } from "../components/FadeSlideToRight";
import styles from "../styles/achievement.module.css";

function Achievement({ skills }) {
  return (
    <div className={`${styles.container} overflow-hidden scrollbar-none`}>
      <Head>
        <title>Skill</title>
        <link rel="icon" href="./profile.png" />
      </Head>
      <main className="flex align-center justify-center flex-row flex-wrap padding-lg">
        <FadeSlideToRight delayInSecond={0}>
          <AchievementCard
            title="ខ្លាឃ្លោក"
            description="I have create a simple ខ្លាឃ្លោក game by using javascript"
          />
        </FadeSlideToRight>
        <FadeSlideToRight delayInSecond={0.25}>
          <AchievementCard title="" description="" />
        </FadeSlideToRight>

        <FadeSlideToRight delayInSecond={0.25}>
          <AchievementCard title="" description="" />
        </FadeSlideToRight>
        <FadeSlideToRight delayInSecond={0.25}>
          <AchievementCard title="" description="" />
        </FadeSlideToRight>
        <FadeSlideToRight delayInSecond={0.25}>
          <AchievementCard title="" description="" />
        </FadeSlideToRight>
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

  return {
    props: {
      skills: data?.data,
    }, // will be passed to the page component as props
  };
}

export default Achievement;
