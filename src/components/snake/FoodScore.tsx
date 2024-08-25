import { type FC } from "react";
import "@components/snake/showFoodLeft.css";
import clsx from "clsx";

interface Props {
  isActive?: boolean;
}

const FoodScore: FC<Props> = ({ isActive }) => {
  return <div className={clsx("food", { "!opacity-100": isActive })}></div>;
};

export default FoodScore;
