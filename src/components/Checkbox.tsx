import { type FC, useState } from "react";
import { clsx } from "clsx";
import Checkicon from "@assets/check-icon.svg";

interface Props {
    onCheck: (isCheck: boolean) => void;
    isCheck: boolean;
}

const Checkbox: FC<Props> = ({ onCheck, isCheck }) => {

    const handleCheck = () => {
        onCheck(!isCheck);
    }

    return (
        <label className="relative block select-none w-[19px] h-[19px] cursor-pointer">
            <input type="checkbox" className="absolute opacity-0 cursor-pointer w-0 h-0" onClick={handleCheck} />
            <span
                className={clsx(
                    'absolute top-0 left-0 w-[19px] h-[19px] rounded-sm flex justify-center items-center border-2 border-secondary-gray hover:ring-[3px] ring-secondary-gray/30 transition-all',
                    isCheck ? 'bg-secondary-gray' : 'bg-transparent'
                )}>
                {isCheck && <img src={Checkicon.src} alt="" />}
            </span>
        </label>
    )
}

export default Checkbox;