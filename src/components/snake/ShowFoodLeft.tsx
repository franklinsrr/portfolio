import { type FC } from "react";
import FoodScore from "@components/snake/FoodScore";

const ShowFoodLeft: FC = () => {
  return (
    <div className="grid grid-cols-5 gap-5 justify-items-center pt-5 w-fit">
      <FoodScore isActive />
      <FoodScore />
      <FoodScore />
      <FoodScore />
      <FoodScore />
      <FoodScore />
      <FoodScore />
      <FoodScore />
      <FoodScore />
      <FoodScore />
    </div>
  );
};

export default ShowFoodLeft;
