import { type FC, useState } from "react";
import clsx from "clsx";
import ToggleTitle from "@components/menu/ToggleTittle";
import ThirdLevelLink from "@components/about/ThirdLevelLink";
import {
  CONTACT_LINKS as contactLinks,
  SOCIAL_MEDIA_LINKS as socialLinks,
} from "@constants/links";

interface Props {
  socialMediaShow?: boolean;
  topBorder?: boolean;
}

const ContactMenu: FC<Props> = ({
  socialMediaShow = false,
  topBorder = false,
}) => {
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isFindMeMenuOpen, setIsFindMeMenuOpen] = useState(false);

  const handleConctatClick = () => {
    setIsContactMenuOpen((prev) => !prev);
  };

  const handleFindMeMenuClick = () => {
    setIsFindMeMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <section className="flex flex-col gap-2">
        <ToggleTitle
          onClick={handleConctatClick}
          topBorder={topBorder}
          isOpen={isContactMenuOpen}
        >
          contacts
        </ToggleTitle>
        <ul
          className={clsx("lg:flex flex-col gap-2 ml-3", {
            "sm:flex": isContactMenuOpen,
            "sm:hidden": !isContactMenuOpen,
          })}
        >
          {contactLinks.map((link) => (
            <li className="w-full" key={link.title}>
              <ThirdLevelLink link={link} isActive={false} />
            </li>
          ))}
        </ul>
      </section>

      {socialMediaShow && (
        <section className="flex flex-col gap-2">
          <ToggleTitle
            onClick={handleFindMeMenuClick}
            topBorder
            isOpen={isFindMeMenuOpen}
          >
            find-me-also-in
          </ToggleTitle>
          <ul
            className={clsx("lg:flex flex-col gap-2 ml-3", {
              "sm:flex": isFindMeMenuOpen,
              "sm:hidden": !isFindMeMenuOpen,
            })}
          >
            {socialLinks.map((link) => (
              <li className="w-full" key={link.title}>
                <ThirdLevelLink link={link} isActive={false} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ContactMenu;
