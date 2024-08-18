import { type Tech } from "@interfaces/components";
import { SVG_WITH_BG } from "@constants/svg";
import type { FC } from "react";

interface Props {
  tech: Tech;
}

const Technology: FC<Props> = ({ tech }) => {
  const svgImage = SVG_WITH_BG[tech];
  return <img src={svgImage.src} alt={tech} />;
};

export default Technology;
