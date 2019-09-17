const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const aglio = require('aglio');
const boom = require('@hapi/boom');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());

app.get('/', (req, res) => {
  res.send('Server Works! 🖖');
});

app.post('/blueprint', (req, res) => {
  const { blueprint, theme } = req.body;

  aglio.render(
    blueprint,
    {
      themeVariables: theme || 'default'
    },
    (err, html) => {
      if (err) res.send(boom.boomify(err));
      res.send({ html });
    }
  );
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
