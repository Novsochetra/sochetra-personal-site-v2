import React from "react";
import { AchievementCardPresentationProps } from "./AchievementCard.interfaces";
import Image from "next/image";

export const AchievementCardPresentation: React.FC<AchievementCardPresentationProps> = ({
  title,
  description,
  thumbnails = ["/main-profile.jpeg"],
}) => {
  return (
    <div className="flex width-300px scale-up-md flex flex-grow-1 position-relative overflow-hidden border-radius-lg bg-flowerblue margin-lg">
      {thumbnails.length === 1 ? (
        <Image
          placeholder="blur"
          src={thumbnails[0]}
          className="object-contain"
          width="1000"
          height="1000"
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 8,
            flexWrap: "wrap",
            flex: 1,
          }}
        >
          {thumbnails.slice(0, 4).map((thumbnail) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 12,
                  margin: 8,
                  backgroundColor: "#7c7ce2ba",
                  width: 100,
                  flexGrow: 1,
                }}
              >
                <Image
                  placeholder="blur"
                  src={thumbnail}
                  className="object-contain"
                  width="1000"
                  height="1000"
                />
              </div>
            );
          })}
        </div>
      )}
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
