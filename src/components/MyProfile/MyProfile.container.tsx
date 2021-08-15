import { profile } from "console";
import Router from "next/router";
import React, { useRef, useState } from "react";
import { MyProfileProps } from "./MyProfile.interfaces";
import { MyProfilePresentation } from "./MyProfile.presentation";

export const MyProfile: React.FC<MyProfileProps> = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const profileWrapperRef = useRef<HTMLDivElement>();
  const imageRef = useRef<any>();
  const favoriteItem1 = useRef<HTMLDivElement>();
  const favoriteItem2 = useRef<HTMLDivElement>();
  const favoriteItem3 = useRef<HTMLAnchorElement>();
  const favoriteItem4 = useRef<HTMLAnchorElement>();
  const favoriteItem5 = useRef<HTMLAnchorElement>();
  const favoriteItem6 = useRef<HTMLAnchorElement>();
  const favoriteItem7 = useRef<HTMLAnchorElement>();
  const favoriteItem8 = useRef<HTMLAnchorElement>();
  const profileIntroRef = useRef<HTMLDivElement>();
  let timeout;

  React.useEffect(() => {
    let translateY = "200px";
    animateProfileIntro(translateY);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const animateProfileIntro = (value, opacityValue = 1, delay = "0s") => {
    profileIntroRef.current.style.opacity = `${opacityValue}`;
    profileIntroRef.current.style.transform = `translateY(${value})`;
    profileIntroRef.current.style.transition = `all 1s cubic-bezier(0.075, 0.82, 0.165, 1) ${delay}`;
  };

  const onAnimatedProfileFavorite = () => {
    // const translateX = window.screen.width < 730 ? 160 : 280;
    // const translateY = window.screen.width < 730 ? 160 : 280;
    let translateX = 0;
    let translateY = 0;

    if (window.innerWidth < 430) {
      translateX = translateY = 145;
    } else if (window.innerWidth < 730) {
      translateX = translateY = 160;
    } else {
      translateX = translateY = 280;
    }

    animateProfileIntro(`${translateY}px`, 0);

    const C2 = Math.sqrt(Math.pow(translateX, 2) + Math.pow(translateY, 2)) / 2;
    profileWrapperRef.current.style.padding = "12px";
    profileWrapperRef.current.style.boxShadow = "none";
    profileWrapperRef.current.style.transform = `scale(1.1) rotateZ(45deg)`;
    profileWrapperRef.current.style.backgroundImage = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='300' ry='300' stroke='%23ffffff' stroke-width='7' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e")`;
    profileWrapperRef.current.style.borderRadius = `300px`;
    profileWrapperRef.current.style.cursor = `pointer`;
    profileWrapperRef.current.style.transition = `all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)`;

    imageRef.current.style.transform = `rotateZ(-45deg)`;
    imageRef.current.style.transition = `all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)`;

    favoriteItem1.current.style.transform = `translate(${translateX}px, ${0}px)`;
    favoriteItem1.current.style.transition = `all 0.5s`;
    favoriteItem1.current.style.opacity = `1`;

    favoriteItem2.current.style.transform = `translate(${C2}px, ${C2}px)`;
    favoriteItem2.current.style.transition = `all 0.5s 0.25s`;
    favoriteItem2.current.style.opacity = `1`;

    favoriteItem3.current.style.transform = `translate(0px, ${translateY}px)`;
    favoriteItem3.current.style.transition = `all 0.5s 0.5s`;
    favoriteItem3.current.style.opacity = `1`;

    favoriteItem4.current.style.transform = `translate(-${C2}px, ${C2}px)`;
    favoriteItem4.current.style.transition = `all 0.5s 0.75s`;
    favoriteItem4.current.style.opacity = `1`;

    favoriteItem5.current.style.transform = `translate(-${translateX}px, 0px)`;
    favoriteItem5.current.style.transition = `all 0.5s 1s`;
    favoriteItem5.current.style.opacity = `1`;

    favoriteItem6.current.style.transform = `translate(-${C2}px, -${C2}px)`;
    favoriteItem6.current.style.transition = `all 0.5s 1.25s`;
    favoriteItem6.current.style.opacity = `1`;

    favoriteItem7.current.style.transform = `translate(0px, -${translateY}px)`;
    favoriteItem7.current.style.transition = `all 0.5s 1.5s`;
    favoriteItem7.current.style.opacity = `1`;

    favoriteItem8.current.style.transform = `translate(${C2}px, -${C2}px)`;
    favoriteItem8.current.style.transition = `all 0.5s 1.75s`;
    favoriteItem8.current.style.opacity = `1`;
  };

  const onResetProfileFavorite = () => {
    favoriteItem1.current.style.transform = `translate(0px, 0px)`;
    favoriteItem1.current.style.transition = `all 0.5s`;
    favoriteItem1.current.style.opacity = `0`;

    favoriteItem2.current.style.transform = `translate(0px, 0px)`;
    favoriteItem2.current.style.transition = `all 0.5s 0.25s`;
    favoriteItem2.current.style.opacity = `0`;

    favoriteItem3.current.style.transform = `translate(0px, 0px)`;
    favoriteItem3.current.style.transition = `all 0.5s 0.5s`;
    favoriteItem3.current.style.opacity = `0`;

    favoriteItem4.current.style.transform = `translate(0px, 0px)`;
    favoriteItem4.current.style.transition = `all 0.5s 0.75s`;
    favoriteItem4.current.style.opacity = `0`;

    favoriteItem5.current.style.transform = `translate(0px, 0px)`;
    favoriteItem5.current.style.transition = `all 0.5s 1s`;
    favoriteItem5.current.style.opacity = `0`;

    favoriteItem6.current.style.transform = `translate(0px, 0px)`;
    favoriteItem6.current.style.transition = `all 0.5s 1.25s`;
    favoriteItem6.current.style.opacity = `1`;

    favoriteItem7.current.style.transform = `translate(0px, 0px)`;
    favoriteItem7.current.style.transition = `all 0.5s 1.5s`;
    favoriteItem7.current.style.opacity = `1`;

    favoriteItem8.current.style.transform = `translate(0px, 0px)`;
    favoriteItem8.current.style.transition = `all 0.5s 1.75s`;
    favoriteItem8.current.style.opacity = `1`;

    profileWrapperRef.current.style.padding = "0px";
    profileWrapperRef.current.style.boxShadow = `0px 0px 13px -5px rgba(209,209,209,0.75)`;
    profileWrapperRef.current.style.transform = `scale(1) rotateZ(0deg)`;
    profileWrapperRef.current.style.backgroundImage = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='300' ry='300' stroke='%23ffffff' stroke-width='7' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e")`;
    profileWrapperRef.current.style.borderRadius = `300px`;
    profileWrapperRef.current.style.cursor = `pointer`;
    profileWrapperRef.current.style.transition = `all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 2s`;
    profileWrapperRef.current.style.opacity = `1`;

    imageRef.current.style.transform = `rotateZ(0deg)`;
    imageRef.current.style.transition = `all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 2s`;
    imageRef.current.style.opacity = `1`;

    if (window.screen.width < 730) {
      animateProfileIntro("200px", 1, "3s");
    } else {
      animateProfileIntro("200px", 1, "3s");
    }
  };

  const onItemPress = (routeName: string) => {
    favoriteItem1.current.style.transform = `translate(0px, 0px)`;
    favoriteItem1.current.style.transition = `all 0.25s 1s`;
    favoriteItem1.current.style.opacity = `0`;

    favoriteItem2.current.style.transform = `translate(0px, 0px)`;
    favoriteItem2.current.style.transition = `all 0.25s 1.25s`;
    favoriteItem2.current.style.opacity = `0`;

    favoriteItem3.current.style.transform = `translate(0px, 0px)`;
    favoriteItem3.current.style.transition = `all 0.25s 1.5s`;
    favoriteItem3.current.style.opacity = `0`;

    favoriteItem4.current.style.transform = `translate(0px, 0px)`;
    favoriteItem4.current.style.transition = `all 0.25s 1.75s`;
    favoriteItem4.current.style.opacity = `0`;

    favoriteItem5.current.style.transform = `translate(0px, 0px)`;
    favoriteItem5.current.style.transition = `all 0.25s 2s`;
    favoriteItem5.current.style.opacity = `0`;

    favoriteItem6.current.style.transform = `translate(0px, 0px)`;
    favoriteItem6.current.style.transition = `all 0.25s 2.25s`;
    favoriteItem6.current.style.opacity = `0`;

    favoriteItem7.current.style.transform = `translate(0px, 0px)`;
    favoriteItem7.current.style.transition = `all 0.25s 2.5s`;
    favoriteItem7.current.style.opacity = `0`;

    favoriteItem8.current.style.transform = `translate(0px, 0px)`;
    favoriteItem8.current.style.transition = `all 0.25s 2.75s`;
    favoriteItem8.current.style.opacity = `0`;

    profileWrapperRef.current.style.padding = "0px";
    profileWrapperRef.current.style.boxShadow = `0px 0px 13px -5px rgba(209,209,209,0.75)`;
    profileWrapperRef.current.style.transform = `scale(1) rotateZ(0deg)`;
    profileWrapperRef.current.style.backgroundImage = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='300' ry='300' stroke='%23ffffff' stroke-width='7' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e")`;
    profileWrapperRef.current.style.borderRadius = `300px`;
    profileWrapperRef.current.style.cursor = `pointer`;
    profileWrapperRef.current.style.transition = `all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 3s`;

    imageRef.current.style.transform = `rotateZ(0deg)`;
    imageRef.current.style.transition = `all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 3s`;

    profileWrapperRef.current.style.transform = `scale(0) rotateZ(-45deg)`;
    profileWrapperRef.current.style.transition = `all 1s linear 3.25s`;
    profileWrapperRef.current.style.opacity = `0`;

    imageRef.current.style.transform = `rotateZ(45deg)`;
    imageRef.current.style.transition = `all 1s linear 3.25s`;
    imageRef.current.style.opacity = `0`;

    timeout = setTimeout(() => {
      Router.push(routeName);
    }, 4000);
  };

  const onToggleProfile = (value: boolean) => setIsOpenProfile(value);

  return (
    <MyProfilePresentation
      isOpenProfile={isOpenProfile}
      profileWrapperRef={profileWrapperRef}
      imageRef={imageRef}
      favoriteItem1={favoriteItem1}
      favoriteItem2={favoriteItem2}
      favoriteItem3={favoriteItem3}
      favoriteItem4={favoriteItem4}
      favoriteItem5={favoriteItem5}
      favoriteItem6={favoriteItem6}
      favoriteItem7={favoriteItem7}
      favoriteItem8={favoriteItem8}
      profileIntroRef={profileIntroRef}
      onToggleProfile={onToggleProfile}
      onAnimatedProfileFavorite={onAnimatedProfileFavorite}
      onResetProfileFavorite={onResetProfileFavorite}
      onItemPress={onItemPress}
    />
  );
};
