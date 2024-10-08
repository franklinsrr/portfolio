import { type FC, useState, useEffect, useId } from "react";
import "./commentCodeStyles.css";

interface Props {
  code: string;
}

const CommentCode: FC<Props> = ({ code }) => {
  const [lines, setLines] = useState(0);
  const [numbersOfLines, setNumbersOfLines] = useState<number[]>([]);
  const lineCustomContainerId = useId();

  useEffect(() => {
    updateLines();

    window.addEventListener("resize", updateLines);
    return () => {
      window.removeEventListener("resize", updateLines);
    };
  }, []);

  useEffect(() => {
    setNumbersOfLines(Array.from({ length: lines }).map((_, i) => i + 1));
  }, [lines]);

  const updateLines = () => {
    setLines(0);
    const textContainer = document.getElementById(
      `${lineCustomContainerId.toString()}`,
    ) as HTMLElement;
    const styles = window.getComputedStyle(textContainer);
    const lineHeight = parseInt(styles.lineHeight);
    const maxHeight = textContainer?.offsetHeight;
    setLines(Math.ceil(maxHeight / lineHeight) + 1);
  };

  return (
    <div className="code-container flex font-fire-code-retina text-secondary-gray font-custom-big-size">
      <div className="line-numbers lg:flex flex-col w-32 hidden">
        {numbersOfLines.map((n) => (
          <div key={n} className="grid grid-cols-2 justify-end">
            <span className="col-span-1 mr-3">{n}</span>
            {n === 1 && (
              <div className="col-span-1 flex justify-center">/**</div>
            )}
            {n > 1 && n < lines && (
              <div className="col-span-1 flex justify-center">*</div>
            )}
            {n === lines && (
              <div className="col-spal-1 flex justify-center pl-2">*/</div>
            )}
          </div>
        ))}
      </div>
      <div className="text-container">
        <p
          id={lineCustomContainerId}
          className="font-fire-code-retina text-secondary-gray line-custom-container mt-[22px]"
          dangerouslySetInnerHTML={{ __html: code }}
        ></p>
      </div>
    </div>
  );
};

export default CommentCode;
