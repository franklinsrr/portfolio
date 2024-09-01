import type { FC } from "react";
import "@components/snake/start-button.css";

interface Props{
    onClick: () => void;
}

const StartButton:FC<Props> = ({onClick}) => {
    return (
        <button 
            onClick={onClick}
            id="start-button" 
            className="font-fire-code-retina"
        >
                start-game
        </button>
    )
}

export default StartButton;