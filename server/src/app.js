import { ApolloServer } from 'apollo-server';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const PORT = process.env.PORT || 4000;

const isProduction = process.env.NODE_ENV === 'production';

const server = new ApolloServer({
  cors: {
    origin: '*',
  },
  typeDefs,
  resolvers,
  playground: !isProduction,
});

server.listen(PORT).then(({ url }) => {
  console.log(`A GraphQL API server listening on ${url}`);
});
