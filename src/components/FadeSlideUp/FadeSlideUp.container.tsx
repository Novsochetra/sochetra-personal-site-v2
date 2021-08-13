import React from "react";
import { FadeSlideUpProps } from "./FadeSlideUp.interfaces";
import { FadeSlideUpPresentation } from "./FadeSlideUp.presentation";

export const FadeSlideUp: React.FC<FadeSlideUpProps> = ({
  children,
  delayInSecond,
}) => {
  return (
    <FadeSlideUpPresentation delayInSecond={delayInSecond}>
      {children}
    </FadeSlideUpPresentation>
  );
};
