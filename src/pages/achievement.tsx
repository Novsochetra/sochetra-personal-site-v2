import React from "react";
import Head from "next/head";
import { AchievementCard } from "../components/AchievementCard";
import { FadeSlideToRight } from "../components/FadeSlideToRight";
import { SectionHeader } from "../components/SectionHeader";
import { Container } from "../components/Container";

const DELAY_DURATION = 0.25;

function Achievement({ achievements }) {
  return (
    <Container>
      <Head>
        <title>Achivement</title>
        <link rel="icon" href="./profile.png" />
      </Head>
      <div
        className="flex justify-center overflow-scroll"
        style={{ zIndex: 1000 }}
      >
        <main className="scrollbar-none" style={{ maxWidth: 1000 }}>
          {achievements.map((achievement, index) => {
            return (
              <div
                className="flex flex-col"
                key={`achivement-section-row-${index}`}
              >
                <SectionHeader title={achievement.title} />
                <div className="flex flex-row flex-wrap">
                  {achievement.data?.map((d, i) => {
                    return (
                      <FadeSlideToRight
                        delayInSecond={(i + index) * DELAY_DURATION}
                        key={`achivement-section-${i}`}
                      >
                        <AchievementCard
                          title={d.title}
                          description={d.description}
                          thumbnails={d.thumbnails}
                        />
                      </FadeSlideToRight>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/achievement`);
  const data = await res.json();
  if (!data?.data) {
    return {
      achievements: [],
    };
  }

  return {
    props: {
      achievements: data?.data ?? [],
    }, // will be passed to the page component as props
  };
}

export default Achievement;
