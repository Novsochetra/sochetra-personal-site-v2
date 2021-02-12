import React, { DragEventHandler } from "react";
import { ProfileFavoritePresentationProps } from "./ProfileFavorite.interfaces";
import styles from "./ProfileFavorite.module.css";

export const ProfileFavoritePresentation: React.FC<ProfileFavoritePresentationProps> = ({
  color,
  label,
  containerRef,
}) => {
  return (
    <div ref={containerRef} className={styles.profileFavoriteWrapper}>
      <div
        className={styles.content}
        onDrag={(e: React.DragEvent<HTMLDivElement>) => {
          console.log("move: ", e.clientX, e.clientY);
        }}
      >
        <p style={{ userSelect: "none" }} aria-readonly>
          {label}
        </p>
      </div>
    </div>
  );
};
