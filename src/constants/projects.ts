import { Tech } from "@interfaces/components";
import { type Project } from "@interfaces/project";

export const PROJECTS_LIST: Project[] = [
  {
    id: 1,
    title: "_snake-game",
    description: "a sanke game made with vanilla Javascript/Typescript",
    tech: Tech.React,
    image: "/snake-game.png",
    repo: "https://github.com/franklinsrr/snake-game",
    link: "https://snake-game-ten-rho.vercel.app/",
  },
  {
    id: 2,
    title: "_spotify-clone",
    description: "A Spotify clone made with Astro.js, transition view",
    tech: Tech.React,
    image: "/spotify-clone.png",
    repo: "",
    link: "https://spotify-clone-zeta-five.vercel.app/",
  },
  {
    id: 3,
    title: "_ping-pong",
    description: "A Ping pong game made with javascript, css and vitejs",
    tech: Tech.React,
    image: "/ping-pong.png",
    repo: "",
    link: "https://spotify-clone-zeta-five.vercel.app/",
  },
];
