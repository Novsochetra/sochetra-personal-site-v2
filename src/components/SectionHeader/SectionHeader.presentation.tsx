import React from "react";
import { SectionHeaderPresentationProps } from "./SectionHeader.interfaces";

export const SectionHeaderPresentation: React.FC<SectionHeaderPresentationProps> = ({
  title,
  color = "white",
}) => {
  return (
    <h1 className="margin-lg" style={{ color: color }}>
      {title}
    </h1>
  );
};
