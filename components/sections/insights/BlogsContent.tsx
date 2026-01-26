import { PageBlock } from "@/graphql/types";
import parse from 'html-react-parser';
import { Fragment } from 'react';


function BlogsContent({ blocks = [] }: { blocks?: PageBlock[] }) {
  return (
    <div className="w-full block blog-content-wrapper">
      {blocks && blocks.length > 0 ? (
        blocks.map((block, index) => {
          const content = block.saveContent || block.originalContent || block.dynamicContent || '';
          return (
            <Fragment key={index}>
               {parse(content)}
            </Fragment>
          );
        })
      ) : (
        <p className="text-gray-500 italic">No content available for this post.</p>
      )}
    </div>
  );
}

export default BlogsContent;
