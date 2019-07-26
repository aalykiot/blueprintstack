import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: {
    defaults: {
      settings: {
        editorTheme: 'railscasts',
        previewTheme: 'default',
        __typename: 'Settings',
      },
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
        updateSettings: async (_, { settings }, { cache }) => {
          await cache.writeData({ settings });
          return null;
        },
      },
    },
    typeDefs: `
      type Settings {
        editorTheme: String,
        previewTheme: String
      }

      type Query {
        settings: Settings,
        editorValue: String,
        preview: String
      }

      type Mutation {
        updateEditorValue(value: String!),
        updatePreview(value: String!),
        updateSettings(settings: Settings!)
      }
    `,
  },
});

export default client;
