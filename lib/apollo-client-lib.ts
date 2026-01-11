import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const ApolloClientLib = new ApolloClient({
   link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_BACKEND_API || ''}/graphql`,
   }),
   cache: new InMemoryCache(),
   defaultOptions: {
      query: {
         fetchPolicy: 'no-cache',
         errorPolicy: 'all',
      },
   },
});

export default ApolloClientLib;
