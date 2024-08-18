import { type FC } from "react";

const ProjectNotFound: FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center">
      <h3 className="text-4xl text-secondary-gray">X__X</h3>
      <h1 className="text-xl text-white font-fire-code-retina">
        No matching projects
      </h1>
      <h2 className="font-fire-code-retina text-secondary-gray font-custom-big-size">
        for these technologies
      </h2>
    </div>
  );
};

export default ProjectNotFound;
