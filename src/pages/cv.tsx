import React, { useState } from "react";
import Head from "next/head";
import { WorkExperienceItem } from "../components/WorkExperienceItem";
import { FadeSlideUp } from "../components/FadeSlideUp";
import styles from "../components/Cv/cv.module.css";

function Cv({ skills }) {
  return (
    <div className={`${styles.container} over`}>
      <Head>
        <title>CV</title>
        <link rel="icon" href="./profile.png" />
      </Head>
      <main className="flex flex-col overflow-scroll scrollbar-none">
        <FadeSlideUp delayInSecond={0}>
          <WorkExperienceItem
            durationLabel="3rd February 2021 – Present"
            experiences={[
              "Working on Nokor Driver App (Logistic App)",
              "Working on EMQuick Customer App (Logistic App)",
            ]}
          />
        </FadeSlideUp>
        <FadeSlideUp delayInSecond={0.25}>
          <WorkExperienceItem
            durationLabel="3rd February 2020 – 2021"
            experiences={[
              "Working On Zillion Gamer which is a app for Beniten company list the latest news about the app",
              "Working On EveEve App (a dating app base in japan)",
              "Working On Planly App E-commerece for india (was close on covid during end of 2020) 😌",
              "Working On Planly App Inventory for india (was close on covid during end of 2020) 😌",
            ]}
          />
        </FadeSlideUp>
        <FadeSlideUp delayInSecond={0.5}>
          <WorkExperienceItem
            durationLabel="14th Sep 2017 – 2020"
            experiences={[
              "Be a part of Gotifo Mobile ( Post Page, and Animation Post Page)",
              "Working on Oscar Mobile (Fixing bug, Adding Client, Offline)",
              "Write a ruby script template to convert excel to JSON",
              "Scraping Website using Apify writing in Node.js",
              "Create new Feature to improve our task better",
              "Create Task Management for Team to use intergrate with JIRA and Pivotal Tracker writing in React JS",
            ]}
          />
        </FadeSlideUp>
        <FadeSlideUp delayInSecond={0.75}>
          <WorkExperienceItem
            durationLabel="1st Jun 2018 – 31st Oct 2018"
            experiences={[
              "Maintenance backend system of Givangel",
              "Adding New Feature to System.",
              "Writing API for mobile.",
            ]}
          />
        </FadeSlideUp>

        <FadeSlideUp delayInSecond={1}>
          <WorkExperienceItem
            durationLabel="13th January 2016 – 01th June 2017"
            experiences={[
              "Building Teacher Assessement for a School using Php Framework (Codeigneiter)",
              "Manage Task for team member, analyse database",
              "Work on front end of System (HTML, CSS, JS, Materialize CSS)",
              "Design interface, mock up, coding",
              "Merge Member Code",
            ]}
          />
        </FadeSlideUp>
      </main>
    </div>
  );
}

export async function getStaticProps() {
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
}

export default Cv;
