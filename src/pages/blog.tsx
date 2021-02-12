import React, { useRef, useState } from "react";
import Head from "next/head";
import { Card, CardProps } from "../components/Card";
import styles from "../styles/blog.module.css";
import { MyProfile } from "../components/MyProfile";

function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="./profile.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.postWrapper}>
          {posts?.map((post: CardProps, i: number) => {
            return (
              <Card
                key={`${post.title} ${i}`}
                title="The WET Codebase"
                description="In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought!"
                thumbnail={post.thumbnail}
                publishedAt="2days ago"
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/`);
  const data = await res.json();
  if (!data?.data) {
    return {
      posts: [],
    };
  }

  console.log("post: ", data);
  return {
    props: {
      posts: data?.data,
    }, // will be passed to the page component as props
  };
}

export default Blog;
