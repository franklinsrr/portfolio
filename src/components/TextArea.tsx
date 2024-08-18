import type { TextareaHTMLAttributes, FC } from "react";

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<Props & TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  name,
  ...rest
}) => {
  return (
    <fieldset className="flex flex-col gap-2 text-secondary-gray font-fire-code-retina font-custom-normal-size w-full">
      <label htmlFor={name}>_{name}</label>
      <textarea
        {...rest}
        id={name}
        className="border-2 border-linescolor bg-primary-dark rounded-md p-2 w-full overflow-hidden outline-none focus:border-secondary-gray focus:shadow-md focus:shadow-secondary-gray/40"
      />
    </fieldset>
  );
};

export default TextArea;
