import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: {
    defaults: {
      editorValue:
        '\n# GET /message\n  + Response 200 (text/plain)\n\n           Hello World!',
    },
    resolvers: {
      Mutation: {
        updateEditorValue: async (_, { value }, { cache }) => {
          const data = { editorValue: value };
          await cache.writeData({ data });
          return null;
        },
      },
    },
    typeDefs: `
      type Query {
        editorValue: String,
      }

      type Mutation {
        updateEditorValue(value: String!)
      }
    `,
  },
});

export default client;
