// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CardProps } from "../../components/Card";

const sampleBlog: CardProps[] = [
  {
    title: "The WET Codebase",
    description:
      "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
    publishedAt: "July 13, 2020",
    thumbnail:
      "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  },
  {
    title: "The WET Codebase",
    description:
      "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
    publishedAt: "July 13, 2020",
    thumbnail:
      "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  },
  {
    title: "The WET Codebase",
    description:
      "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
    publishedAt: "July 13, 2020",
    thumbnail:
      "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  },
  {
    title: "The WET Codebase",
    description:
      "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
    publishedAt: "July 13, 2020",
    thumbnail:
      "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  },
  // {
  //   title: "The WET Codebase",
  //   description:
  //     "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
  //   publishedAt: "July 13, 2020",
  //   thumbnail:
  //     "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  // },
  // {
  //   title: "The WET Codebase",
  //   description:
  //     "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
  //   publishedAt: "July 13, 2020",
  //   thumbnail:
  //     "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  // },
  // {
  //   title: "The WET Codebase",
  //   description:
  //     "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
  //   publishedAt: "July 13, 2020",
  //   thumbnail:
  //     "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  // },
  // {
  //   title: "The WET Codebase",
  //   description:
  //     "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
  //   publishedAt: "July 13, 2020",
  //   thumbnail:
  //     "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  // },
  // {
  //   title: "The WET Codebase",
  //   description:
  //     "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
  //   publishedAt: "July 13, 2020",
  //   thumbnail:
  //     "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  // },
  // {
  //   title: "The WET Codebase",
  //   description:
  //     "In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought",
  //   publishedAt: "July 13, 2020",
  //   thumbnail:
  //     "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jp",
  // },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: sampleBlog });
};
