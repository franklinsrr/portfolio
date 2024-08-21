import clsx from "clsx";
import type { AnchorHTMLAttributes, FC } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  isActive: boolean;
};

const ButtonIn: FC<Props> = ({ children, href, isActive, ...rest }) => {
  return (
    <a
      href={isActive ? href : "javascript:void(0)"}
      className={clsx(
        "rounded-lg font-custom-size font-fire-code-normal px-3.5 py-2.5 transition-colors bg-button-default text-white hover:bg-buttonHover-default w-fit",
        {
          "bg-secondary-gray": !isActive,
        },
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ButtonIn;
