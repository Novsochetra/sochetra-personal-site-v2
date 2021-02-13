import React from "react";
import { SkillCardProps } from "./SkillCard.interfaces";
import { SkillCardPresentation } from "./SkillCard.presentation";

export const SkillCard: React.FC<SkillCardProps> = (props) => {
  return (
    <SkillCardPresentation title={props.title} thumbnail={props.thumbnail} />
  );
};
