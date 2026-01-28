import phFlag from "../assets/flag-icon-round/philippines-rounded.png";
import ukFlag from "../assets/flag-icon-round/united-kingdom-rounded.png";
import caFlag from "../assets/flag-icon-round/canada-rounded.png";
import esFlag from "../assets/flag-icon-round/spain-rounded.png";
export interface FLAGS {
  value: string,
  image: string,
}

export const countryImages: FLAGS[] = [
  {
    value: "philippines",
    image: phFlag
  },
  {
    value: "united-kingdom",
    image: ukFlag,
  },
  {
    value: "spain",
    image: esFlag
  },
  {
    value: "canada",
    image: caFlag,
  },
];