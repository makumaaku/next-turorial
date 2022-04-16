import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PostPreview = (props: any) => {
  return (
    <div className="h-full w-full mr-10">
      <div className="markdown-preview h-full w-full border shadow-xl mb-5 rounded-xl py-4 px-2 overflow-y-scroll bg-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {props.markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PostPreview;
