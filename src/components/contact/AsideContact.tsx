import { type FC } from "react";
import { useContactStore } from "@store/useContactStore";
import CodeFormat from "@components/CodeFormat";
import { formatDate } from "@utils/date";

const AsideContact: FC = () => {
  const form = useContactStore((state) => state.form);
  const date = new Date().getTime();
  const formatted = formatDate(date);

  const code = `const button = document.querySelector ( '#sendBtn' );
const message = {
   name : "${form.name}",
   email : "${form.email}",
   message : "${form.message}",
   date:  "${formatted}"
}


button.addEventListener ( 'click' ), () => {
  form.send ( message );
})
    `;

  return (
    <div className="border-l-[1px] border-l-linescolor flex justify-center lg:py-28 py-10">
      <CodeFormat code={code} fontSize={14} showLineNumber />
    </div>
  );
};

export default AsideContact;
