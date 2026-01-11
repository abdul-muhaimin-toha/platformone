import { DocumentNode } from '@apollo/client';
import ApolloClientLib from './apollo-client-lib';

const getGqlData = async <T>(
   query: DocumentNode,
   variables: Record<string, unknown> = {},
   retries: number = 3
): Promise<T | null> => {
   try {
      const { data } = await ApolloClientLib.query<T>({
         query,
         variables,
         fetchPolicy: 'network-only',
         context: {
            fetchOptions: {
               next: {
                  tags: ['cms'],
                  revalidate: 10,
               },
            },
         },
      });

      return data ?? null;
   } catch (error) {
      if (retries > 0) {
         return getGqlData<T>(query, variables, retries - 1);
      } else {
         console.error('GraphQL request failed:', error);
         return null;
      }
   }
};

export default getGqlData;
