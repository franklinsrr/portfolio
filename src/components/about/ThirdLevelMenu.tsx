import { type FC, useState } from "react";
import ThirdLevelLink from "./ThirdLevelLink";
import ToggleTitle from "@components/menu/ToggleTittle";
import { getMenuLinksByPathname, getThirdMenuTitle } from "@utils/url";

interface Props {
    pathname: string;
}

const ThirdLevelMenu: FC<Props> = ({ pathname }) => {
    const [isOpen, setIsOpen] = useState(false);
    const links = getMenuLinksByPathname(pathname);
    const title = getThirdMenuTitle(pathname)

    const handleToggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <nav className="w-full borderleft flex flex-col gap-2">
            <ToggleTitle onClick={handleToggleMenu}>
                {title}
            </ToggleTitle>
            <section className="w-full pl-3 flex gap-2 flex-col">
                {
                    links?.map((link) => (
                        <ThirdLevelLink link={link} key={link.title} isActive={pathname === link.href} />
                    ))
                }
            </section>
        </nav>
    )
}

export default ThirdLevelMenu;