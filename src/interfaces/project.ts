import type { Tech } from "./components";

export interface Project {
    title: string;
    id: number;
    image: string;
    description: string;
    tech: Tech,
    link: string;
    repo: string;
}