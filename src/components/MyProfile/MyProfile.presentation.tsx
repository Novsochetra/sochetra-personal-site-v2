import React from "react";
import { ProfileFavorite } from "../ProfileFavorite";
import Image from "next/image";
import { MyProfilePresentationProps } from "./MyProfile.interfaces";
import styles from "./MyProfile.module.css";
import Link from "next/link";

export const MyProfilePresentation: React.FC<MyProfilePresentationProps> = ({
  isOpenProfile,

  profileWrapperRef,
  imageRef,
  favoriteItem1,
  favoriteItem2,
  favoriteItem3,
  favoriteItem4,
  favoriteItem5,
  favoriteItem6,
  favoriteItem7,
  favoriteItem8,
  profileIntroRef,

  onAnimatedProfileFavorite,
  onResetProfileFavorite,
  onToggleProfile,
  onItemPress,
}) => {
  return (
    <div
      className={styles.favoriteWrapper}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <div
        className={styles.profileFavoriteItem}
        ref={favoriteItem1}
        onClick={() => onItemPress("/blog")}
      >
        <ProfileFavorite color="rgb(108, 139, 155)" label="Blog" />
      </div>

      <div
        className={styles.profileFavoriteItem}
        ref={favoriteItem2}
        onClick={() => onItemPress("/skill")}
      >
        <ProfileFavorite color="rgb(108, 139, 155)" label="Skill" />
      </div>

      <Link href="/blog">
        <a className={styles.profileFavoriteItem} ref={favoriteItem3}>
          <ProfileFavorite color="rgb(108, 139, 155)" label="Favorite" />
        </a>
      </Link>

      <Link href="/blog">
        <a className={styles.profileFavoriteItem} ref={favoriteItem4}>
          <ProfileFavorite color="rgb(108, 139, 155)" label="Book" />
        </a>
      </Link>

      <Link href="/blog">
        <a className={styles.profileFavoriteItem} ref={favoriteItem5}>
          <ProfileFavorite color="rgb(108, 139, 155)" label="Achievement" />
        </a>
      </Link>

      <Link href="/blog">
        <a className={styles.profileFavoriteItem} ref={favoriteItem6}>
          <ProfileFavorite color="rgb(108, 139, 155)" label="CV" />
        </a>
      </Link>

      <Link href="/blog">
        <a className={styles.profileFavoriteItem} ref={favoriteItem7}>
          <ProfileFavorite color="rgb(108, 139, 155)" label="Biography" />
        </a>
      </Link>

      <Link href="/blog">
        <a className={styles.profileFavoriteItem} ref={favoriteItem8}>
          <ProfileFavorite color="rgb(108, 139, 155)" label="Contact" />
        </a>
      </Link>

      <div className={styles.profileIntro} ref={profileIntroRef}>
        <p>I am sochetra</p>
      </div>
      <div
        ref={profileWrapperRef}
        className={styles.profileWrapper}
        onClick={() => {
          if (isOpenProfile) {
            onResetProfileFavorite();
            onToggleProfile(false);
            return;
          }

          onAnimatedProfileFavorite();
          onToggleProfile(true);
        }}
      >
        <div className={styles.profile} ref={imageRef}>
          <Image
            src="/main-profile.jpeg"
            alt="my-profile"
            width="1000"
            height="1000"
            objectFit="cover"
            className={styles.imageProfile}
          />
        </div>
      </div>
    </div>
  );
};
