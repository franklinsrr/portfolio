import React, { type FC } from "react";
import { clsx } from "clsx";
import downWhiteIconSVG from "@assets/down-white-arrow-icon.svg";

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    isOpen: boolean;
}

const ToggleTitle: FC<Props> = ({ children, onClick, isOpen }) => {
    return (
        <button className="font-fire-code-normal font-custom-normal-size text-white pl-6 flex items-center bg-linescolor h-[35px] w-full" onClick={onClick}>
            <img src={downWhiteIconSVG.src} alt="down arrow" height="7px" width="9px" className={clsx("mr-3 rotate-[-95deg]", { "rotate-0": isOpen })} />
            {children}
        </button>
    )
}

export default ToggleTitle;