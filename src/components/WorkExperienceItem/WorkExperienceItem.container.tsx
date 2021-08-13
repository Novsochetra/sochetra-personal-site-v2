import React from "react";
import { WorkExperienceItemProps } from "./WorkExperienceItem.interfaces";
import { WorkExperienceItemPresentation } from "./WorkExperienceItem.presentation";

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = (
  props
) => {
  return <WorkExperienceItemPresentation {...props} />;
};
