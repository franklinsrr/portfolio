import { type FC } from "react";
import ToggleTitle from "./ToggleTittle";
import ThirdLevelLink from "@components/about/ThirdLevelLink";
import { CONTACT_LINKS as contactLinks, SOCIAL_MEDIA_LINKS as socialLinks } from "@constants/links";

interface Props {
    socialMediaShow?: boolean;
    topBorder?: boolean
}

const ContactMenu: FC<Props> = ({ socialMediaShow = false, topBorder = false }) => {
    const handleClick = () => { }

    return (
        <div className="w-full flex flex-col gap-2">
            <section className="flex flex-col gap-2">
                <ToggleTitle onClick={handleClick} topBorder={topBorder}>
                    contacts
                </ToggleTitle>
                <ul className="flex flex-col gap-2 ml-3">
                    {
                        contactLinks.map((link) => (
                            <li className="w-full" key={link.title}>

                                <ThirdLevelLink link={link} isActive={false} />
                            </li>
                        ))
                    }
                </ul>
            </section>

            {socialMediaShow && <section className="flex flex-col gap-2">
                <ToggleTitle onClick={handleClick} topBorder>
                    find-me-also-in
                </ToggleTitle>
                <ul className="flex flex-col gap-2 ml-3">
                    {
                        socialLinks.map((link) => (
                            <li className="w-full" key={link.title}>

                                <ThirdLevelLink link={link} isActive={false} />
                            </li>
                        ))
                    }
                </ul>
            </section>
            }
        </div>
    )
}

export default ContactMenu;