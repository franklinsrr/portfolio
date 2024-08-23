import { thirdLevelLinks, ABOUT_SECTIONS } from "@constants/links";

export function getMenuLinksByPathname(pathname: string) {
  const links = Object.entries(thirdLevelLinks);

  if (
    pathname === "/about" ||
    pathname.includes("/about/personal-info") ||
    pathname === "/about/"
  ) {
    return thirdLevelLinks["/about"];
  }

  const restLinks = links.filter(
    (link) => link[0] !== "/about" || link[0].includes("/about/personal-info"),
  );

  const menuLinks = restLinks.find((link) => {
    if (pathname.includes(link[0])) return link;
  });

  return menuLinks?.[1];
}

export function getThirdMenuTitle(pathname: string) {
  const menus = Object.entries(ABOUT_SECTIONS);

  if (pathname === "/about" || pathname?.includes("/about/personal-info")) {
    return "personal-info";
  }

  const filteredMenu = menus.filter(
    (menu) =>
      menu[1].url !== "/about" &&
      menu[1].url !== "/about/personal-info" &&
      menu[1].url !== "/about/",
  );

  const menu = filteredMenu.find((item) => pathname.includes(item[1].url));

  return menu?.[1].title;
}
