import { type FC } from "react";
import Card from "@components/Card";
import ProjectNotFound from "./projects/ProjectNotFound";
import { PROJECTS_LIST } from "@constants/projects";
import { useCategoryStore } from "@store/useCategoryStore";

const ProjectList: FC = () => {
    const cats = useCategoryStore((state) => state.categories).filter(cat => cat.isActive).map((cat) => cat.title);

    const list = PROJECTS_LIST.filter((project) => cats.find((cat) => cat.includes(project.tech))) || [];

    if (list.length <= 0) {
        return (

            <div className="flex w-full items-center justify-center h-full">
                <ProjectNotFound />

            </div>
        )
    }

    return (
        <ul className="flex flex-wrap gap-8 p-20">
            {
                list.map((project) => (<Card key={project.id} project={project} />))
            }
        </ul>
    )
}

export default ProjectList;