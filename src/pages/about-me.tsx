import React, { useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/about-me.module.css";

function AboutMe({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sochetra NOV</title>
        <link rel="icon" href="./profile.png" />
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/`);
    const data = await res.json();
    if (!data?.data) {
      return {
        props: {
          posts: [],
        },
      };
    }

    return {
      props: {
        posts: data?.data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default AboutMe;
