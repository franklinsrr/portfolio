import { type FC } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const LinkButton: FC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="bg-button-default text-white hover:bg-buttonHover-default rounded-lg font-custom-size font-fire-code-normal px-3.5 py-2.5 transition-colors"
    >
      {children}
    </a>
  );
};

export default LinkButton;
