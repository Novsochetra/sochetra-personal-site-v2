import React from "react";
import { SkillCardPresentationProps } from "./SkillCard.interfaces";
import styles from "./SkillCard.module.css";
import Image from "next/image";

export const SkillCardPresentation: React.FC<SkillCardPresentationProps> = ({
  title,
  thumbnail,
}) => {
  return (
    <div className={styles.skillCardContainer}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={thumbnail}
          width="300"
          height="300"
          className={styles.skillThumbnail}
        />
      </div>
      {/* <p>title</p> */}
    </div>
  );
};
