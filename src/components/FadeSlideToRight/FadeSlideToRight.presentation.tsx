import React from "react";
import { FadeSlideToRightPresentationProps } from "./FadeSlideToRight.interfaces";

export const FadeSlideToRightPresentation: React.FC<FadeSlideToRightPresentationProps> = ({
  delayInSecond,
  children,
}) => {
  return (
    <div
      className="fade-slide-to-right"
      style={{ animationDelay: `${delayInSecond}s` }}
    >
      {children}
    </div>
  );
};
