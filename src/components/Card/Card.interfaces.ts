// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardProps {
  title: string;

  description: string;

  thumbnail: string;

  publishedAt: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardPresentationProps extends CardProps {}
