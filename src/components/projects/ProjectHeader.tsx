import { type FC } from "react";
import PageHeader from "@components/PageHeader";
import { useCategoryStore } from "@store/useCategoryStore";

const ProjectHeader: FC = () => {
  const cats =
    useCategoryStore((cats) => cats)
      .categories.filter((cat) => cat.isActive)
      .map((cat) => cat.title) || [];

  let title = "all;";

  if (cats.length > 0) {
    title = cats.reduce((acc, currentValue) => {
      acc += ` ${currentValue};`;
      return acc;
    });
  }

  return <PageHeader title={title} pathname="/projects"/>;
};

export default ProjectHeader;
