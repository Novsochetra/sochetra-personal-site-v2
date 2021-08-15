import React from "react";
import { SectionHeaderProps } from "./SectionHeader.interfaces";
import { SectionHeaderPresentation } from "./SectionHeader.presentation";

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return <SectionHeaderPresentation title={title} />;
};
