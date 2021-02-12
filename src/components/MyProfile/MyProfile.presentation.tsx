import React from "react";
import { ProfileFavorite } from "../ProfileFavorite";
import Image from "next/image";
import { MyProfilePresentationProps } from "./MyProfile.interfaces";
import styles from "./MyProfile.module.css";

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
}) => {
  return (
    <div
      className={styles.favoriteWrapper}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <div className={styles.profileFavoriteItem} ref={favoriteItem1}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="Blog" />
      </div>

      <div className={styles.profileFavoriteItem} ref={favoriteItem2}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="Skill" />
      </div>

      <div className={styles.profileFavoriteItem} ref={favoriteItem3}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="Favorite" />
      </div>

      <div className={styles.profileFavoriteItem} ref={favoriteItem4}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="Book" />
      </div>

      <div className={styles.profileFavoriteItem} ref={favoriteItem5}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="Achievement" />
      </div>

      <div className={styles.profileFavoriteItem} ref={favoriteItem6}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="CV" />
      </div>

      <div className={styles.profileFavoriteItem} ref={favoriteItem7}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="Biography" />
      </div>

      <div className={styles.profileFavoriteItem} ref={favoriteItem8}>
        <ProfileFavorite color="rgb(108, 139, 155)" label="Contact" />
      </div>

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
            // src="https://pixabay.com/get/g02f618de774aaf7ff1b61cc3bde00781b82f1774a8b88c9380b0de2caf20a896fc508e49b3ef82734558ed3a7fe1e553.jpg"
            // src="./../../assets/images/profile.jpeg"
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
