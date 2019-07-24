import aglio from 'aglio';

const aglioOptions = {
  themeVariables: 'default',
};

const resolvers = {
  Query: {
    template: (_, args) =>
      new Promise((resolve, reject) => {
        aglio.render(args.blueprint, aglioOptions, (err, html) => {
          if (err) reject(err);
          resolve(html);
        });
      }),
  },
};

export default resolvers;
