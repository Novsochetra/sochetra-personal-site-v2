import React from "react";
import { AchievementCardPresentationProps } from "./AchievementCard.interfaces";
import Image from "next/image";

export const AchievementCardPresentation: React.FC<AchievementCardPresentationProps> = ({
  title,
  description,
  thumbnail = "/main-profile.jpeg",
}) => {
  return (
    <div className="flex width-300px scale-up-md flex flex-grow-1 position-relative overflow-hidden height-300px border-radius-lg bg-flowerblue margin-lg">
      <Image
        placeholder="blur"
        src={thumbnail}
        className="object-contain"
        width="1000"
        height="1000"
      />

      <div className="position-absolute bottom-0 bg-black-300 width-full min-height-100px padding-sm">
        <div className="padding-sm">
          <h1 className="text-center color-white margin-unset">{title}</h1>
        </div>
        <div className="padding-sm">
          <p className="text-center color-white margin-unset">{description}</p>
        </div>
      </div>
    </div>
  );
};
