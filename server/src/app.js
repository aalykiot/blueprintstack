import { ApolloServer } from 'apollo-server';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const isProduction = process.env.NODE_ENV === 'production';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !isProduction,
});

server.listen().then(({ url }) => {
  console.log(`A GraphQL API server listening on ${url}`);
});
