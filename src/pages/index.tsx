import React, { useRef, useState } from "react";
import Head from "next/head";
import { Card, CardProps } from "../components/Card";
import styles from "../styles/index.module.css";
import { MyProfile } from "../components/MyProfile";
import { Container } from "../components/Container";

function Home({ posts }) {
  return (
    <Container>
      {/* <div className={styles.container}> */}
      <Head>
        <title>Sochetra NOV</title>
        <link rel="icon" href="./profile.png" />
      </Head>

      <aside className={styles.leftSidebar}>
        <MyProfile />
      </aside>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/`);
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

export default Home;
