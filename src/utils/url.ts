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

  const subPage = pathname.split("/")[pathname?.split("/")?.length - 1];

  if (pathname === "/about" || pathname?.includes("/about/personal-info")) {
    if (subPage === "about") {
      return ["personal-info", "bio"];
    }
    return ["personal-info", subPage];
  }

  const filteredMenu = menus.filter(
    (menu) =>
      menu[1].url !== "/about" &&
      menu[1].url !== "/about/personal-info" &&
      menu[1].url !== "/about/",
  );

  const menu = filteredMenu.find((item) => pathname.includes(item[1].url));

  if (subPage === "hobbies") {
    return [menu?.[1].title, "sports"];
  }

  if (subPage === "professional-info") {
    return [menu?.[1].title, "experience"];
  }

  return [menu?.[1].title, subPage];
}
