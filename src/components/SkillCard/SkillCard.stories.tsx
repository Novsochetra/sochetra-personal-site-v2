import React from "react";
import { SkillCard as SkillCardComponent } from ".";
import "./SkillCard.module.css";
// import graphqlPic from "/graphql.png";

export default { title: "SkillCard" };

export const SkillCard = (): React.ReactElement => {
  return <SkillCardComponent thumbnail="/graphql.png" title="Node JS" />;
};
