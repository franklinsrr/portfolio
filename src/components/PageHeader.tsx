import { type FC } from "react";

interface Props {
  title: string;
}

const PageHeader: FC<Props> = ({ title }) => {
  return (
    <div className="w-full border-b-[1px] border-b-linescolor h-[35px] font-custom-normal-size font-fire-code-normal text-secondary-gray flex items-center pl-4 py-0">
      <span className="border-r-[1px] border-r-linescolor pr-6 h-[35px] flex items-center">
        {title} x
      </span>
    </div>
  );
};

export default PageHeader;
