import type { ButtonHTMLAttributes, FC } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const ButtonIn: FC<Props> = ({ children, ...rest }) => {
  const handleClick = () => {};

  return (
    <button
      className="rounded-lg font-custom-size font-fire-code-normal px-3.5 py-2.5 transition-colors bg-button-default text-white hover:bg-buttonHover-default w-fit"
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonIn;
