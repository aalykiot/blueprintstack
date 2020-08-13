import aglio from 'aglio';

export const renderFunc = blueprint =>
  new Promise((resolve, reject) => {
    aglio.render(blueprint, { themeVariables: 'default' }, (err, html) => {
      if (err) reject(err);
      resolve(html);
    });
  });
