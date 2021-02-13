// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CardProps } from "../../components/Card";

const skill = [
  {
    title: "UI Animation & Interaction",
    thumbnail: "/graphql.png",
  },
  {
    title: "Next JS",
    thumbnail: "/next-js.png",
  },
  {
    title: "React",
    thumbnail: "/react.png",
  },
  {
    title: "Mongo DB",
    thumbnail: "/mongo-db.png",
  },
  {
    title: "Node JS",
    thumbnail: "/node-js.png",
  },

  {
    title: "Redux",
    thumbnail: "/redux.png",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: skill });
};
