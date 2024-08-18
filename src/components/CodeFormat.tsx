import { type FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: string;
  fontSize?: number;
  showLineNumber?: boolean;
}

const CodeFormat: FC<Props> = ({
  code,
  fontSize = 12,
  showLineNumber = false,
}) => {
  return (
    <>
      <SyntaxHighlighter
        showLineNumbers={showLineNumber}
        language="javascript"
        style={tomorrowNightEighties}
        customStyle={{
          background: "transparent",
          fontFamily: "Fira Code Retina",
          fontSize: fontSize,
          overflow: "hidden",
        }}
        wrapLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeFormat;
