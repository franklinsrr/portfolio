import pinkFolderSVG from "@assets/pink-folder-icon.svg";
import greenFolderSVG from "@assets/green-folder-icon.svg";
import purpleFolderSVG from "@assets/purple-folder-icon.svg";
import degreeFolderSVG from "@assets/degree-icon.svg";

export const ABOUT_SECTIONS = {
    professionalInfo: "/about/professional-info",
    personalInfo: "/about/personal-info",
    hobbies: "/about/hobbies"
}

export const PROFESSIONAL_INFO_LINKS: ArticleLink[] = [
    {
        title: "experience",
        href: `${ABOUT_SECTIONS.professionalInfo}/experience`,
        toggle: true,
        src: pinkFolderSVG.src
    },
    {
        title: "hard-skills",
        href: `${ABOUT_SECTIONS.professionalInfo}/hard-skills`,
        toggle: true,
        src: greenFolderSVG.src
    },
    {
        title: "soft-skills",
        href: `${ABOUT_SECTIONS.professionalInfo}/soft-skills`,
        toggle: true,
        src: purpleFolderSVG.src
    },
]

export const PERSONAL_INFO_LINKS: ArticleLink[] = [
    {
        title: "bio",
        href: `${ABOUT_SECTIONS.personalInfo}/bio`,
        toggle: true,
        src: pinkFolderSVG.src
    },
    {
        title: "interests",
        href: `${ABOUT_SECTIONS.personalInfo}/interests`,
        toggle: true,
        src: greenFolderSVG.src
    },
    {
        title: "education",
        href: `${ABOUT_SECTIONS.personalInfo}/education`,
        toggle: true,
        src: purpleFolderSVG.src
    },
    {
        title: "hight-school",
        href: `${ABOUT_SECTIONS.personalInfo}/hight-school`,
        toggle: false,
        src: purpleFolderSVG.src
    },
    {
        title: "university",
        href: `${ABOUT_SECTIONS.personalInfo}/university`,
        toggle: false,
        src: purpleFolderSVG.src
    },
]


export const HOBBIES_LINKS: ArticleLink[] = [
    {
        title: "sports",
        href: `${ABOUT_SECTIONS.hobbies}/sports`,
        toggle: true,
        src: pinkFolderSVG.src
    },
    {
        title: "favorite-games",
        href: `${ABOUT_SECTIONS.professionalInfo}/favorites-games`,
        toggle: true,
        src: greenFolderSVG.src
    },
]

