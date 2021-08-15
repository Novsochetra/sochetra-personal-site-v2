import React from "react";
import { AchievementCardProps } from "./AchievementCard.interfaces";
import { AchievementCardPresentation } from "./AchievementCard.presentation";

export const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  thumbnails,
}) => {
  return (
    <AchievementCardPresentation
      title={title}
      description={description}
      thumbnails={thumbnails}
    />
  );
};
