import { type FC } from "react";
import clsx from "clsx";
import arrowGraySVG from "@assets/arrow-gray-icon.svg";
import { type ArticleLink } from "@interfaces/links"

interface Props {
    link: ArticleLink;
    isActive: boolean
}

const ThirdLevelLink: FC<Props> = ({ link, isActive }) => {
    return (
        <a href={link.href} className="w-full flex gap-3">
            {link.toggle && <img src={arrowGraySVG.src} alt="arrow" width="8px" height="8px" className={clsx(isActive && "rotate-90")} />}
            <img src={link.src} alt="folder icon" width="16px" height="21px" className={clsx({ "ml-5": !link.toggle })} />
            <span className={clsx("font-custom-normal-size font-fire-code-normal text-secondary-gray hover:text-white", { "text-white": isActive })}>
                {link.title}
            </span>
        </a>
    )
}

export default ThirdLevelLink;