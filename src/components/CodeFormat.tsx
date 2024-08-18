import { type FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: string;
}

const CodeFormat: FC<Props> = ({ code }) => {
  return (
    <>
      <SyntaxHighlighter
        language="javascript"
        style={tomorrowNightEighties}
        customStyle={{
          background: "transparent",
          fontFamily: "Fira Code Retina",
          fontSize: 12,
        }}
        wrapLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeFormat;
