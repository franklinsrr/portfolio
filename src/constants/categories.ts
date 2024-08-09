import type { Category } from "@interfaces/category";
import reactSVG from "@assets/react-icon.svg";
import VueSVG from "@assets/Vue-icon.svg";
import AngularSVG from "@assets/Angular-icon.svg";
import HMTLSVG from "@assets/HTML-icon.svg";
import CSSSVG from "@assets/CSS-icon.svg";
import GatsbySVG from "@assets/Gatsby-icon.svg";
import NextJSSVG from "@assets/nextjs-icon.svg";


export const CATEGORIES: Category[] = [
    {
        title: "React",
        src: reactSVG.src,
        isActive: false
    },
    {
        title: "Angular",
        src: AngularSVG.src,
        isActive: false

    },
    {
        title: "Vue",
        src: VueSVG.src,
        isActive: false

    },
    {
        title: "NextJS",
        src: NextJSSVG.src,
        isActive: false

    },
    {
        title: "Gatsby",
        src: GatsbySVG.src,
        isActive: false

    },
    {
        title: "CSS",
        src: CSSSVG.src,
        isActive: false

    },
    {
        title: "HMTL",
        src: HMTLSVG.src,
        isActive: false

    }
]