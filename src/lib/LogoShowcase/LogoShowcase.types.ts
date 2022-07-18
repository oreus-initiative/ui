// Generated with util/create-component.js
export interface ColorsArray {
  colors: Array<string>;
}

export interface ShowcaseLogo {
  img: string;
  alt: string;
  colors: ColorsArray;
};

export interface LogoShowcaseProps {
    logos: Array<ShowcaseLogo>;
    delay: number;
}
