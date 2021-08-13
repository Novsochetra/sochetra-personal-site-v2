import React from "react";
import { WorkExperienceItemPresentationProps } from "./WorkExperienceItem.interfaces";

export const WorkExperienceItemPresentation: React.FC<WorkExperienceItemPresentationProps> = ({
  durationLabel,
  experiences,

  borderColor = "lightgray",
  borderRadius = "lg",
  style,
}) => {
  return (
    <div
      className={`flex cursor-pointer scale-up-sm margin-lg bg-white border border-radius-${borderRadius} padding-lg overflow-hidden hover-ocean`}
      style={style}
    >
      <div className="flex flex-row flex-col-lg">
        <div className="flex flex-row text-start">
          <p className="margin-vertical-md">{durationLabel}</p>
        </div>
        <div className="flex flex-row">
          <ul className="margin-unset">
            {experiences.map((value: string, index: number) => (
              <li
                key={`work-experience-item-${index}`}
                className="margin-vertical-lg"
              >
                <p className="margin-unset">{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
