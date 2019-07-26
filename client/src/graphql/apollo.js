import ApolloClient from 'apollo-boost';

const defaultState = {
  settings: {
    themes: {
      editor: 'railscasts',
      preview: 'default',
      __typename: 'Themes',
    },
    __typename: 'Settings',
  },
  editor:
    '\n# GET /message\n  + Response 200 (text/plain)\n\n           Hello World!',
  preview: null,
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: {
    defaults: defaultState,
    resolvers: {
      Mutation: {
        updateEditor: async (_, { value }, { cache }) => {
          await cache.writeData({
            data: {
              editor: value,
            },
          });
          return null;
        },
        updatePreview: async (_, { value }, { cache }) => {
          await cache.writeData({
            data: {
              preview: value,
            },
          });
          return null;
        },
        updateSettings: async (_, { settings }, { cache }) => {
          await cache.writeData({
            data: {
              settings,
            },
          });
          return null;
        },
      },
    },
  },
});

export default client;
