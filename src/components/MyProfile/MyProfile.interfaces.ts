import { Ref } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyProfileProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyProfilePresentationProps {
  isOpenProfile: boolean;

  onAnimatedProfileFavorite: () => void;
  onResetProfileFavorite: () => void;
  onToggleProfile: (value: boolean) => void;
  onItemPress: () => void;

  profileWrapperRef: Ref<HTMLDivElement>;
  imageRef: Ref<HTMLDivElement>;
  favoriteItem1: Ref<HTMLDivElement>;
  favoriteItem2: Ref<HTMLAnchorElement>;
  favoriteItem3: Ref<HTMLAnchorElement>;
  favoriteItem4: Ref<HTMLAnchorElement>;
  favoriteItem5: Ref<HTMLAnchorElement>;
  favoriteItem6: Ref<HTMLAnchorElement>;
  favoriteItem7: Ref<HTMLAnchorElement>;
  favoriteItem8: Ref<HTMLAnchorElement>;
  profileIntroRef: Ref<HTMLDivElement>;
}
