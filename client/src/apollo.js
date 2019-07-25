import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: {
    defaults: {
      editorValue:
        '\n# GET /message\n  + Response 200 (text/plain)\n\n           Hello World!',
      preview: null,
    },
    resolvers: {
      Mutation: {
        updateEditorValue: async (_, { value }, { cache }) => {
          const data = { editorValue: value };
          await cache.writeData({ data });
          return null;
        },
        updatePreview: async (_, { value }, { cache }) => {
          const data = { preview: value };
          await cache.writeData({ data });
          return null;
        },
      },
    },
    typeDefs: `
      type Query {
        editorValue: String,
        preview: String
      }

      type Mutation {
        updateEditorValue(value: String!),
        updatePreview(value: String!)
      }
    `,
  },
});

export default client;
