import { Tech } from "@interfaces/components"
import reactSVGWithBG from "@assets/react-bg-icon.svg"
import angularSVGWithBG from "@assets/angular-bg-icon.svg"
import cssSVGWithBG from "@assets/CSS-bg-icon.svg"
import vueSVGWithBG from "@assets/vue-bg-icon.svg"
import htmlSVGWithBG from "@assets/HTML-bg-icon.svg"
import gatsbySVGWithBG from "@assets/gatsby-bg-icon.svg";
import nextjsSVGWithBG from "@assets/nextjs-bg-icon.svg";


export const SVG_WITH_BG = {
    [Tech.HTML]: htmlSVGWithBG,
    [Tech.CSS]: cssSVGWithBG,
    [Tech.React]: reactSVGWithBG,
    [Tech.Angular]: angularSVGWithBG,
    [Tech.Vue]: vueSVGWithBG,
    [Tech.Gatsby]: gatsbySVGWithBG,
    [Tech.Nextjs]: nextjsSVGWithBG,
}