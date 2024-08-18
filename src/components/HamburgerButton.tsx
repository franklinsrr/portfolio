import { type FC } from "react";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button
      className="h-[49px] border-r-[1px] border-linescolor px-6"
      onClick={onClick}
    >
      <img
        src={isOpen ? "/close-icon.svg" : "/hamburger-icon.svg"}
        alt="hamburger"
        width="20px"
        height="20px"
      />
    </button>
  );
};

export default HamburgerButton;
