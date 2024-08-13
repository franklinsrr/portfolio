import { type FC } from "react";
import downWhiteIconSVG from "@assets/down-white-arrow-icon.svg";


interface Props {
    children: React.ReactNode;
    onClick: () => void
}

const ToggleTitle: FC<Props> = ({ children, onClick }) => {
    return (
        <button className="flex justify-start items-center h-8 lg:border-b-[1px] lg:border-b-linescolor" onClick={onClick}>
            <img src={downWhiteIconSVG.src} alt="down arrow" height="7px" width="9px" className="mx-3" />
            <span className="font-fire-code-normal font-custom-normal-size text-white">
                {children}
            </span>
        </button>
    )
}

export default ToggleTitle;