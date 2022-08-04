export interface ShowcaseLogo {
  img: string;
  alt: string;
  colors: Array<string>;
};

export interface LogoShowcaseProps {
    logos: Array<ShowcaseLogo>;
    delay: number;
    style?: any;
    className?: string;
}
