import aglio from 'aglio';

const resolvers = {
  Query: {
    template: (_, args) =>
      new Promise((resolve, reject) => {
        const aglioOptions = {
          themeVariables: args.theme || 'default',
        };

        aglio.render(args.blueprint, aglioOptions, (err, html) => {
          if (err) reject(err);
          resolve(html);
        });
      }),
  },
};

export default resolvers;
