import React, { useRef, useState } from "react";
import Head from "next/head";
import { Card, CardProps } from "../components/Card";
import styles from "../styles/index.module.css";
import { MyProfile } from "../components/MyProfile";

function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="./profile.png" />
      </Head>
      <p>Tmp Blog Post</p>
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
