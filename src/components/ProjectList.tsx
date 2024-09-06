import { type FC } from "react";
import Card from "@components/Card";
import ProjectNotFound from "./projects/ProjectNotFound";
import { PROJECTS_LIST } from "@constants/projects";
import { useCategoryStore } from "@store/useCategoryStore";

const ProjectList: FC = () => {
  const cats = useCategoryStore((state) => state.categories)
    .filter((cat) => cat.isActive)
    .map((cat) => cat.title);

  const list =
    PROJECTS_LIST.filter((project) =>
      cats.find((cat) => cat.includes(project.tech)),
    ) || [];

  if (list.length <= 0) {
    return (
      <div className="flex w-full items-center justify-center h-full">
        <ProjectNotFound />
      </div>
    );
  }

  return (
    <ul className="gap-24 px-20 2xl:py-14 sm:py-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-[1400px] h-full lg:self-center project-list-super-xs">
      {list.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
