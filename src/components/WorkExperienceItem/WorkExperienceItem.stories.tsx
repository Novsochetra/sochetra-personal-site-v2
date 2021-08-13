import React from "react";
import { WorkExperienceItem as WorkExperienceItemComponent } from ".";
import "./WorkExperienceItem.module.css";

export default { title: "WorkExperienceItem" };

export const WorkExperienceItem = ({}): React.ReactElement => {
  return (
    <WorkExperienceItemComponent
      durationLabel="05th June 2017 – 30th Sep 2017"
      experiences={[
        "Coding",
        "Languages (Ruby, Ruby on rails, CSS, React JS, jQuery, ES6, API)",
        "Coding",
        "Coding",
        "Coding",
        "Coding",
      ]}
    />
  );
};
