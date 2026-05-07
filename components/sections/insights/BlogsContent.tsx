import { PageBlock } from '@/graphql/types';
import parse from 'html-react-parser';
import { Fragment } from 'react';
import GatedContentOverlay from './GatedContentOverlay';

function BlogsContent({
  blocks = [],
  isGated = false,
  postId,
}: {
  blocks?: PageBlock[];
  isGated?: boolean;
  postId?: number;
}) {
  const visibleBlocks = isGated
    ? blocks.slice(0, Math.ceil(blocks.length / 5))
    : blocks;

  return (
    <div
      className={`w-full block blog-content-wrapper ${isGated ? 'relative overflow-hidden' : ''}`}
    >
      {visibleBlocks && visibleBlocks.length > 0 ? (
        visibleBlocks.map((block, index) => {
          const content =
            block.saveContent ||
            block.originalContent ||
            block.dynamicContent ||
            '';

          return <Fragment key={index}>{parse(content)}</Fragment>;
        })
      ) : (
        <p className="text-gray-500 italic">
          No content available for this post.
        </p>
      )}
      {isGated && <GatedContentOverlay postId={postId} />}
    </div>
  );
}

export default BlogsContent;
