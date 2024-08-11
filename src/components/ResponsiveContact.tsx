import { type FC, useState } from "react";
import ToggleTitle from "./ToggleTitle";

interface Props {
    children: React.ReactNode;
    title: string;
}

const ResponsiveContact: FC<Props> = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className="w-full sm:block lg:hidden">
            <ToggleTitle isOpen={isOpen} onClick={handleClick}>
                {title}
            </ToggleTitle>
            {isOpen && children}
        </div>
    )
}

export default ResponsiveContact;