import blockComponentsMapping from '@/components/index';
import { PageBlock } from '@/graphql/types';
import React from 'react';

interface RenderBlocksHelperProps {
  blocks: PageBlock[];
}

const RenderBlocksHelper: React.FC<RenderBlocksHelperProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return <p>Page is empty</p>;
  }

  return (
    <>
      {blocks.map((block, index) => {
        const BlockComponent =
          blockComponentsMapping[
            block.name as keyof typeof blockComponentsMapping
          ];
        if (!BlockComponent) {
          if (process.env.NODE_ENV === 'development') {
            console.log(
              `Block with name "${block.name}" is not found in Block Mapping`
            );
          }
          return null;
        }
        const blockData = block.attributesJSON
          ? JSON.parse(block.attributesJSON)
          : {};

        return <BlockComponent key={index} data={blockData} />;
      })}
    </>
  );
};

export default RenderBlocksHelper;
