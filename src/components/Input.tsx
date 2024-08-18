import type { InputHTMLAttributes, FC } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ name, onChange, ...rest }) => {
  return (
    <fieldset className="flex flex-col gap-2 text-secondary-gray font-fire-code-retina font-custom-normal-size w-full">
      <label htmlFor={name}>_{name}</label>
      <input
        onChange={onChange}
        className="border-2 border-linescolor bg-primary-dark rounded-md h-[40px] p-2 w-full outline-none focus:border-secondary-gray focus:shadow-md focus:shadow-secondary-gray/40"
        id={name}
        {...rest}
      />
    </fieldset>
  );
};

export default Input;
