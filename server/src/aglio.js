const aglio = require('aglio');

function renderFunc(blueprint) {
  return new Promise((resolve, reject) => {
    aglio.render(blueprint, { themeVariables: 'default' }, (err, html) => {
      if (err) reject(err);
      resolve(html);
    });
  });
}

module.exports = {
  renderFunc,
};
