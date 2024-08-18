import { create } from "zustand";
import { type Category } from "@interfaces/category";
import { CATEGORIES } from "@constants/categories";

type CategoryState = {
  categories: Category[];
};

type CategoryAction = {
  toggle: (Category: Category) => void;
};

export const useCategoryStore = create<CategoryState & CategoryAction>()(
  (set) => ({
    categories: CATEGORIES,
    toggle: (category) =>
      set((state) => {
        const newCategories = state.categories?.map((cat) => {
          if (cat?.title === category?.title) {
            return category;
          }

          return cat;
        });
        return {
          ...state,
          categories: newCategories,
        };
      }),
  }),
);
