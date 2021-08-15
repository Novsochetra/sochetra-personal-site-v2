import React from "react";
import { FadeSlideToRightPresentationProps } from "./FadeSlideToRight.interfaces";

export const FadeSlideToRightPresentation: React.FC<FadeSlideToRightPresentationProps> = ({
  delayInSecond,
  children,
}) => {
  return (
    <div
      className="fade-slide-to-right flex flex-1"
      style={{ animationDelay: `${delayInSecond}s` }}
    >
      {children}
    </div>
  );
};
