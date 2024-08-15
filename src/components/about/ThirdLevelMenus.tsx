import { type FC } from "react";
import { useMobileDetector } from "@hooks/useMobileDectector";
import ThirdLevelMenu from "@components/about/ThirdLevelMenu";
import ContactMenu from "@components/menu/ContactMenu";
import { getMenuLinksByPathname, getThirdMenuTitle } from "@utils/url";
import {
    PROFESSIONAL_INFO_LINKS,
    PERSONAL_INFO_LINKS,
    HOBBIES_LINKS
} from "@constants/links"

interface Props {
    pathname: string;
}

const ThirdLevelMenus: FC<Props> = ({ pathname }) => {
    let links = getMenuLinksByPathname(pathname);
    const { isMobile } = useMobileDetector(1023);

    if (isMobile) {
        return (<div className="flex flex-col gap-2 w-full">
            <ThirdLevelMenu links={PROFESSIONAL_INFO_LINKS} title="professional-info" pathname={pathname} />
            <ThirdLevelMenu links={PERSONAL_INFO_LINKS} title="personal-info" pathname={pathname} />
            <ThirdLevelMenu links={HOBBIES_LINKS} title="hobbies-info" pathname={pathname} />
            <ContactMenu topBorder />
        </div>)
    }

    const pathTitle = getThirdMenuTitle(pathname);

    return (
        <div className="flex flex-col w-full gap-2">
            <ThirdLevelMenu links={links} pathname={pathname} title={pathTitle || "info"} />
            <ContactMenu topBorder />
        </div>
    )
}

export default ThirdLevelMenus;