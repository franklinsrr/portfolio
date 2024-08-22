import { type FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierSulphurpoolDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        lineNumberStyle={{ color: "#607B96", width: 30 }}
        wrapLines
        wrapLongLines
        style={atelierSulphurpoolDark}
        customStyle={{
          background: "transparent",
          fontFamily: "Fira Code Retina",
          fontSize: fontSize,
          overflow: "hidden",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeFormat;
