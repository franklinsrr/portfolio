import { type FC, useState } from "react";
import ToggleTitle from "./ToggleTitle";

interface Props {
    title: string;
    children: React.ReactNode;
}

const ToggleMenuTitle: FC<Props> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);

    }
    return (
        <div className="w-full mb-1">
            <ToggleTitle onClick={handleClick} isOpen={isOpen}>
                {title}
            </ToggleTitle>
            {isOpen && (
                <section className="w-full">
                    {children}
                </section>)
            }
        </div>
    )
}

export default ToggleMenuTitle;