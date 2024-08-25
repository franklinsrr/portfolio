import { type FC, useState } from "react";
import HamburgerButton from "./HamburgerButton";

interface Props {
  children: React.ReactNode;
}

const HamburgerMenu: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="lg:hidden flex flex-col relative w-full border-b-linescolor border-b-[1px] bg-primary z-50">
      <div className="w-full flex h-[49px]">
        <a
          href="/"
          className="font-fire-code-retina font-custom-normal-size flex items-center h-[49px] px-6 text-secondary-gray hover:text-white hover:bg-link-hover-background border-r-[1px] border-r-linescolor w-full"
        >
          franklin-rodriguez
        </a>
        <HamburgerButton isOpen={isOpen} onClick={handleClick} />
      </div>
      {isOpen && (
        <div
          className={
            "flex-col w-full absolute top-[49px] bottom-0 bg-primary h-[calc(100vh-64px-109px)]"
          }
        >
          {children}
        </div>
      )}
    </nav>
  );
};

export default HamburgerMenu;
