import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Card as CardComponent } from ".";
import { CardProps } from "./Card.interfaces";
import styles from "./Card.module.css";

export default { title: "Global Component" };

const Template: Story<CardProps> = (args): React.ReactElement => {
  return <CardComponent {...args} />;
};

export const Card = Template.bind({}) as any;

Card.args = {
  title: "First Article",

  description: "Some Description",

  thumbnail:
    "https://pixabay.com/get/g38575843043d5b8c2877559858b7173537e09acd3d1bd5ae063016715fa28cb270cc443e361bbcc7c4a666a3503d7a60.jpg",

  publishedAt: "2days ago",
};
