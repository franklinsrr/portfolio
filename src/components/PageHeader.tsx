import { getThirdMenuTitle } from "@utils/url";
import { type FC } from "react";

interface Props {
  title?: string;
  pathname: string;
}

const PageHeader: FC<Props> = ({ title, pathname }) => {
  const [pageTitle, subPageTitle] = getThirdMenuTitle(pathname);

  return (
    <div className="w-full lg:border-b-[1px] lg:border-b-linescolor h-[35px] font-custom-normal-size font-fire-code-normal text-secondary-gray flex items-center pl-4 py-0">
      <span className="flex lg:hidden text-white">// {pageTitle}&#160;</span>
      <span className="flex lg:hidden text-secondary-gray">/&#160;</span>
      <span className="lg:border-r-[1px] lg:border-r-linescolor pr-6 h-[35px] flex items-center">
        {title || subPageTitle} x
      </span>
    </div>
  );
};

export default PageHeader;
