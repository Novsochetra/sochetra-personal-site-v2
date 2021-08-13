import React from "react";
import { ContainerProps } from "./Container.interfaces";
import { ContainerPresentation } from "./Container.presentation";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerPresentation>{children}</ContainerPresentation>;
};
