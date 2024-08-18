import type { FC } from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonIn: FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="rounded-lg font-custom-size font-fire-code-normal px-3.5 py-2.5 transition-colors bg-button-default text-white hover:bg-buttonHover-default w-fit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonIn;
