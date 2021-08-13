import { CSSProperties } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WorkExperienceItemProps {
  durationLabel: string;
  experiences: string[];

  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: "sm" | "md" | "lg" | "rounded";
  style?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WorkExperienceItemPresentationProps
  extends WorkExperienceItemProps {}
