import pinkFolderSVG from "@assets/pink-folder-icon.svg";
import greenFolderSVG from "@assets/green-folder-icon.svg";
import purpleFolderSVG from "@assets/purple-folder-icon.svg";
import degreeSVG from "@assets/degree-icon.svg"
import phoneSVG from "@assets/phone-icon.svg";
import emailSVG from "@assets/mail-icon.svg"
import linkSVG from "@assets/link-icon.svg"
import type { ArticleLink } from "@interfaces/links";

export const ABOUT_SECTIONS = {
    professionalInfo: { url: "/about", title: "professional-info" },
    personalInfo: { url: "/about/personal-info", title: "personal-info" },
    hobbies: { url: "/about/hobbies", title: "hobbies-info" }
}

export const PROFESSIONAL_INFO_LINKS: ArticleLink[] = [
    {
        title: "experience",
        href: `${ABOUT_SECTIONS.professionalInfo.url}`,
        toggle: true,
        src: pinkFolderSVG.src
    },
    {
        title: "hard-skills",
        href: `${ABOUT_SECTIONS.professionalInfo.url}/professional-info/hard-skills`,
        toggle: true,
        src: greenFolderSVG.src
    },
    {
        title: "soft-skills",
        href: `${ABOUT_SECTIONS.professionalInfo.url}/professional-info/soft-skills`,
        toggle: true,
        src: purpleFolderSVG.src
    },
]

export const PERSONAL_INFO_LINKS: ArticleLink[] = [
    {
        title: "bio",
        href: `${ABOUT_SECTIONS.personalInfo.url}`,
        toggle: true,
        src: pinkFolderSVG.src
    },
    {
        title: "interests",
        href: `${ABOUT_SECTIONS.personalInfo.url}/interests`,
        toggle: true,
        src: greenFolderSVG.src
    },
    {
        title: "education",
        href: `${ABOUT_SECTIONS.personalInfo.url}/education`,
        toggle: true,
        src: purpleFolderSVG.src
    },
    {
        title: "hight-school",
        href: `${ABOUT_SECTIONS.personalInfo.url}/hight-school`,
        toggle: false,
        src: degreeSVG.src
    },
    {
        title: "university",
        href: `${ABOUT_SECTIONS.personalInfo.url}/university`,
        toggle: false,
        src: degreeSVG.src
    },
]


export const HOBBIES_LINKS: ArticleLink[] = [
    {
        title: "sports",
        href: `${ABOUT_SECTIONS.hobbies.url}`,
        toggle: true,
        src: pinkFolderSVG.src
    },
    {
        title: "favorite-games",
        href: `${ABOUT_SECTIONS.hobbies.url}/favorites-games`,
        toggle: true,
        src: greenFolderSVG.src
    },
]

export const CONTACT_LINKS: ArticleLink[] = [
    {
        title: "email",
        href: "mailto: franklinserif@gmail.com",
        toggle: false,
        src: emailSVG.src
    },
    {
        title: "phone",
        href: "tel:+4733378901",
        toggle: false,
        src: phoneSVG.src
    }
]

export const SOCIAL_MEDIA_LINKS: ArticleLink[] = [
    {
        title: "instagram",
        href: "https://www.instagram.com/franklinserif/",
        toggle: false,
        src: linkSVG.src
    },
    {
        title: "twitch",
        href: "https://www.twitch.tv/franklingra",
        toggle: false,
        src: linkSVG.src
    },
]

interface IThirdLevelLinks {
    [keyof: string]: ArticleLink[]
}

export const thirdLevelLinks: IThirdLevelLinks = {
    "/about": PROFESSIONAL_INFO_LINKS,
    "/about/personal-info": PERSONAL_INFO_LINKS,
    "/about/hobbies": HOBBIES_LINKS,
}