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
              `Block with name "${block.name}" is not found in Block Mapping`,
            );
          }
          return null;
        }

        let blockData: any = {};

        // Safely handle attributesJSON
        if (block.attributesJSON) {
          if (typeof block.attributesJSON === 'string') {
            try {
              blockData = JSON.parse(block.attributesJSON);
            } catch (error) {
              console.warn(
                `Failed to parse attributesJSON for block "${block.name}":`,
                error,
              );
              blockData = {};
            }
          } else if (typeof block.attributesJSON === 'object') {
            blockData = block.attributesJSON;
          } else {
            blockData = {};
          }
        }

        return <BlockComponent key={index} data={blockData} />;
      })}
    </>
  );
};

export default RenderBlocksHelper;
