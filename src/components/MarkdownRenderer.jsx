import React from "react";

// Markdown
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ text }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
);

export default MarkdownRenderer;
