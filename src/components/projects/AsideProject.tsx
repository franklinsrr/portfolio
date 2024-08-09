import { type FC } from "react";
import ProjectCategory from "./ProjectsCategory";
import { useCategoryStore } from "@store/index";
import type { Category } from "@interfaces/category";


const AsideProject: FC = () => {
    const categories = useCategoryStore((state) => state.categories);
    const toggleCategory = useCategoryStore(state => state.toggle);


    const handleCategory = (Category: Category) => {
        toggleCategory(Category);
    }

    return (
        <aside className="h-[calc(100vh-64px-100px)] flex flex-col items-start border-r-linescolor border-r-[1px] w-[310px] px-[25px] py-[10px]">
            {categories?.map((cat) => (
                <ProjectCategory category={cat} onCheck={handleCategory} key={cat.title} />
            ))}
        </aside>
    )
}

export default AsideProject;