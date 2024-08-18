import { type FC, useState } from "react";
import clsx from "clsx";
import ThirdLevelLink from "@components/about/ThirdLevelLink";
import ToggleTitle from "@components/menu/ToggleTittle";
import type { ArticleLink } from "@interfaces/links";

interface Props {
  pathname: string;
  links: ArticleLink[] | undefined;
  title: string;
}

const ThirdLevelMenu: FC<Props> = ({ pathname, links, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="w-full borderleft flex flex-col gap-2">
      <ToggleTitle onClick={handleToggleMenu} isOpen={isOpen}>
        {title}
      </ToggleTitle>
      <section
        className={clsx(
          "w-full pl-3 lg:flex gap-2 flex-col hidden sm:pl-5",
          {
            "!flex": isOpen,
          },
        )}
      >
        {links?.map((link) => (
          <ThirdLevelLink
            link={link}
            key={link.title}
            isActive={pathname === link.href}
          />
        ))}
      </section>
    </nav>
  );
};

export default ThirdLevelMenu;
