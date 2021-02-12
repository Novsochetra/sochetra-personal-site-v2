import { Ref } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileFavoriteProps {
  color: string;

  label: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileFavoritePresentationProps {
  color: string;

  label: string;

  containerRef: Ref<HTMLDivElement>;
}
