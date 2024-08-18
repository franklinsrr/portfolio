import { type FC } from "react";
import clsx from "clsx";
import downWhiteIconSVG from "@assets/down-white-arrow-icon.svg";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  topBorder?: boolean;
  isOpen?: boolean;
}

const ToggleTitle: FC<Props> = ({
  children,
  onClick,
  topBorder = false,
  isOpen = true,
}) => {
  return (
    <button
      className={clsx(
        "flex justify-start items-center h-[35px] lg:border-b-[1px] lg:border-b-linescolor w-full sm:bg-linescolor sm:pl-3 lg:bg-transparent",
        { "border-t-linescolor border-t-[1px]": topBorder },
      )}
      onClick={onClick}
    >
      <img
        src={downWhiteIconSVG.src}
        alt="down arrow"
        height="7px"
        width="9px"
        className={clsx("mx-3 sm:rotate-[-90deg]", {
          "sm:!rotate-[0deg]": isOpen,
        })}
      />
      <span className="font-fire-code-normal font-custom-normal-size text-white">
        {children}
      </span>
    </button>
  );
};

export default ToggleTitle;
