'use client';

import { FC } from 'react';
import SideBySideCard from './SideBySideCard';
import { BlockData } from '../../home/types';

export interface SideBySideData {
  feature_image?: string;
  feature_user_image?: string;
  short_description?: string;
  user_designation?: string;
  user_name?: string;
}

export type SideBySideWrapperProps = BlockData<SideBySideData>;

const SideBySideWrapper: FC<SideBySideWrapperProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    feature_image = '',
    feature_user_image = '',
    short_description = '',
    user_designation = '',
    user_name = '',
  } = content;

  return (
    <section>
      <div className="container-custom">
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col w-full py-24 lg:py-[120px]">
            <SideBySideCard
              avatarSrc={feature_user_image}
              description={short_description}
              imageAlt=""
              name={user_name}
              role={user_designation}
              avatarAlt=""
              imageSrc={feature_image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBySideWrapper;
