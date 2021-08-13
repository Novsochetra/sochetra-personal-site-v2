import React from "react";
import { FadeSlideUpPresentationProps } from "./FadeSlideUp.interfaces";

export const FadeSlideUpPresentation: React.FC<FadeSlideUpPresentationProps> = ({
  delayInSecond = 0,
  children,
}) => {
  return (
    <div
      className="fade-slide-up"
      style={{ animationDelay: `${delayInSecond}s` }}
    >
      {children}
    </div>
  );
};
