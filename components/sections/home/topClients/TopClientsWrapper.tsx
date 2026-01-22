import { FC } from 'react';
import TopClients, { ClientItem, TopClientsProps } from './TopClients';
import { getAllBrands } from '@/graphql/components/get-brands-data';

const TopClientsWrapper = async (props: TopClientsProps) => {
  const brands = await getAllBrands();

  const formattedBrands: ClientItem[] = brands.map((brand) => ({
    _id: brand.id,
    company_logo: brand.logoFile,
  }));

  return <TopClients data={props.data} brands={formattedBrands} />;
};

export default TopClientsWrapper;
