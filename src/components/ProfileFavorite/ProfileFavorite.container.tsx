import React, { useRef, useState } from "react";
import { ProfileFavoriteProps } from "./ProfileFavorite.interfaces";
import { ProfileFavoritePresentation } from "./ProfileFavorite.presentation";

export const ProfileFavorite: React.FC<ProfileFavoriteProps> = ({
  color,
  label,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        style={{
          top: 100,
          left: 100,
          backgroundColor: "blue",
          position: "absolute",
        }}
      ></div>
      <ProfileFavoritePresentation
        containerRef={containerRef}
        color={color}
        label={label}
      />
    </>
  );
};
