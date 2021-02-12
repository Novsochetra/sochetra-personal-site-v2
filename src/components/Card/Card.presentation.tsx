import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardPresentationProps } from "./Card.interfaces";
import { truncate } from "../../utils/string";
import styles from "./Card.module.css";

export const CardPresentation: React.FC<CardPresentationProps> = ({
  title,
  thumbnail,
  publishedAt,
  description,
}) => {
  return (
    <Link href={`/${title}`}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardHeader}>
          <Image
            src={thumbnail}
            width="300"
            height="300"
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.cardContent}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{truncate(description, 150)}</p>

          <p className={styles.publishedAt}>{publishedAt}</p>
        </div>
      </div>
    </Link>
  );
};
