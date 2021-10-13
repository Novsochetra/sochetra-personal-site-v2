import React from "react";
import Head from "next/head";
import { AchievementCard } from "../components/AchievementCard";
import { FadeSlideToRight } from "../components/FadeSlideToRight";
import { SectionHeader } from "../components/SectionHeader";
import { Container } from "../components/Container";

const DELAY_DURATION = 0.25;

function Blog({ blogs }) {
  return (
    <Container>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="./profile.png" />
      </Head>
      <div
        className="flex justify-center overflow-scroll"
        style={{ zIndex: 1000 }}
      >
        <main className="scrollbar-none" style={{ maxWidth: 1000 }}>
          <div className="flex flex-row flex-wrap">
            {blogs?.map((d, i) => {
              return (
                <FadeSlideToRight
                  delayInSecond={i * DELAY_DURATION}
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
        </main>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/blog`);
    const data = await res.json();
    if (!data?.data) {
      return {
        blogs: [],
      };
    }

    return {
      props: {
        blogs: data?.data ?? [],
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      }, // will be passed to the page component as props
    };
  }
}

export default Blog;
