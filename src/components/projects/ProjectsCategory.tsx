import { type FC } from "react";
import clsx from "clsx";
import Checkbox from "@components/Checkbox";
import type { Category } from "@interfaces/category";

interface Props {
  onCheck: (category: Category) => void;
  category: Category;
}

const ProjectCategory: FC<Props> = ({ onCheck, category }) => {
  const handleCheck = (isActive: boolean) => {
    onCheck({ ...category, isActive });
  };

  return (
    <div className="flex items-center font-fire-code-normal font-custom-big-size text-secondary-gray py-2 uppercase w-[300px]">
      <Checkbox onCheck={handleCheck} isCheck={category.isActive} />
      <img
        src={category.src}
        alt={category.title}
        width="20px"
        height="20px"
        className={clsx("mx-4", { "opacity-40": !category.isActive })}
      />
      <span>{category.title}</span>
    </div>
  );
};

export default ProjectCategory;
