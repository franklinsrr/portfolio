
import { thirdLevelLinks, ABOUT_SECTIONS } from "@constants/links";

export function getMenuLinksByPathname(pathname: string) {
    const links = Object.entries(thirdLevelLinks);

    const [_, ...restLinks] = links;

    if (pathname === "/about" || pathname.includes("/about/professional-info")) {
        return thirdLevelLinks["/about"];
    }

    const menuLinks = restLinks.find((link) => {
        if (pathname.includes(link[0])) return link
    });

    return menuLinks?.[1];
}

export function getThirdMenuTitle(pathname: string) {
    const menus = Object.entries(ABOUT_SECTIONS);

    if (pathname === "/about" || pathname.includes("/about/professional-info")) {
        return "professional-info";
    }

    const menu = menus.find((item) => pathname.includes(item[1].url));

    return menu?.[1].title;
}