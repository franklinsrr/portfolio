import { type FC, useState } from "react";
import ProjectCategory from "./ProjectsCategory";
import ToggleTitle from "@components/menu/ToggleTittle";
import { useCategoryStore } from "@store/index";
import type { Category } from "@interfaces/category";

const AsideProject: FC = () => {
    const categories = useCategoryStore((state) => state.categories);
    const toggleCategory = useCategoryStore(state => state.toggle);
    const [isOpen, setIsOpen] = useState(true);

    const handleCategory = (Category: Category) => {
        toggleCategory(Category);
    }

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }


    return (
        <aside className="h-[calc(100vh-64px-100px)] flex flex-col items-start border-r-linescolor border-r-[1px] lg:w-[310px] w-full">
            <span className="h-[70px] font-fire-code-retina text-white justify-start items-center pl-6 flex lg:hidden">
                _projects
            </span>

            <div className="w-full block">
                <ToggleTitle isOpen={isOpen} onClick={handleClick}>
                    projects
                </ToggleTitle>
            </div>
            {isOpen && <div className="px-[25px] py-[10px]">
                {categories?.map((cat) => (
                    <ProjectCategory category={cat} onCheck={handleCategory} key={cat.title} />
                ))}
            </div>}
        </aside>
    )
}

export default AsideProject;