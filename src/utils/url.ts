import { thirdLevelLinks, ABOUT_SECTIONS } from "@constants/links";

export function getMenuLinksByPathname(pathname: string) {
  const path = removeTrailingSlash(pathname);
  const links = Object.entries(thirdLevelLinks);

  if (
    path === "/about" ||
    path.includes("/about/personal-info") ||
    path === "/about/"
  ) {
    return thirdLevelLinks["/about"];
  }

  const restLinks = links.filter(
    (link) => link[0] !== "/about" || link[0].includes("/about/personal-info"),
  );

  const menuLinks = restLinks.find((link) => {
    if (path.includes(link[0])) return link;
  });

  return menuLinks?.[1];
}

export function getThirdMenuTitle(pathname: string) {
  const path = removeTrailingSlash(pathname);
  const menus = Object.entries(ABOUT_SECTIONS);

  const subPage = path.split("/")[path?.split("/")?.length - 1];

  if (path === "/about" || path?.includes("/about/personal-info")) {
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

  const menu = filteredMenu.find((item) => path.includes(item[1].url));

  if (subPage === "hobbies") {
    return [menu?.[1].title, "sports"];
  }

  if (subPage === "professional-info") {
    return [menu?.[1].title, "experience"];
  }

  return [menu?.[1].title, subPage];
}

function removeTrailingSlash(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}