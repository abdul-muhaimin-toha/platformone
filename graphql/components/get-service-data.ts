import getGqlData from '@/lib/get-gql-data';
import { serviceDataQuery } from '../queries/service-data-query';
import { ServiceData } from '../types';

export const getServiceData = async (slug: string) => {
  try {
    const serviceData = await getGqlData<ServiceData>(serviceDataQuery, {
      slug,
    });

    if (!serviceData?.serviceBy) {
      console.warn(`No service found for slug: ${slug}`);
      return [];
    }

    return serviceData.serviceBy.blocks || [];
  } catch (error) {
    console.error('Error fetching service data:', error);
    return [];
  }
};
