import React from "react";
import { FadeSlideToRightProps } from "./FadeSlideToRight.interfaces";
import { FadeSlideToRightPresentation } from "./FadeSlideToRight.presentation";

export const FadeSlideToRight: React.FC<FadeSlideToRightProps> = ({
  children,
  delayInSecond,
}) => {
  return (
    <FadeSlideToRightPresentation delayInSecond={delayInSecond}>
      {children}
    </FadeSlideToRightPresentation>
  );
};
