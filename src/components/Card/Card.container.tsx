import React from "react";
import { CardProps } from "./Card.interfaces";
import { CardPresentation } from "./Card.presentation";

export const Card: React.FC<CardProps> = React.memo((props) => {
  return <CardPresentation {...props} />;
});
