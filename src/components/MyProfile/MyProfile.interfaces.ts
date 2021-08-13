import { Ref } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyProfileProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyProfilePresentationProps {
  isOpenProfile: boolean;

  onAnimatedProfileFavorite: () => void;
  onResetProfileFavorite: () => void;
  onToggleProfile: (value: boolean) => void;
  onItemPress: (routeName: string) => void;

  profileWrapperRef: Ref<HTMLDivElement>;
  imageRef: Ref<HTMLDivElement>;
  favoriteItem1: Ref<HTMLDivElement>;
  favoriteItem2: Ref<HTMLDivElement>;
  favoriteItem3: Ref<HTMLDivElement>;
  favoriteItem4: Ref<HTMLDivElement>;
  favoriteItem5: Ref<HTMLDivElement>;
  favoriteItem6: Ref<HTMLDivElement>;
  favoriteItem7: Ref<HTMLDivElement>;
  favoriteItem8: Ref<HTMLDivElement>;
  profileIntroRef: Ref<HTMLDivElement>;
}
