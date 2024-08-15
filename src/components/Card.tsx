
import type { FC } from "react";
import LinkButton from "@components/LinkButton";
import Technology from "@components/Technology"
import type { Project } from "@interfaces/project";

interface Props {
    project: Project
}

const Card: FC<Props> = ({ project }) => {
    return (
        <section className="">
            <div className="flex gap-3 relative top-[20px]">
                <h2 className="text-sm text-indigo-500 font-fire-code-bold">Project {project.id}</h2>
                <h3 className="text-secondary-gray font-custom-normal-size font-fire-code-retina">// {project.title}</h3>
            </div>
            <section className="relative w-[100%] max-w-[370px] min-w-[291px] overflow-hidden">
                <div className="absolute right-[18px] top-[50px] z-10">
                    <Technology tech={project.tech} />
                </div>
                <img src={project.image} alt="test" className="w-full relative top-[30px] h-[197px] border-x-[1px] border-x-linescolor border-t-[1px] border-t-linescolor rounded-t-2xl" />
                <div className="p-6 pb-[130px] relative top-[-20px] z-10 h-[150px] flex flex-col gap-3 bg-primary-dark border-[1px] border-linescolor rounded-b-2xl">
                    <p className="block text-secondary-gray font-fire-code-retina font-custom-normal-size pb-5">
                        {project.description}
                    </p>
                    <div>
                        <LinkButton href={project.link}>
                            view-project
                        </LinkButton>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Card;
