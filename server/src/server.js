const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { renderFunc } = require('./aglio');

const PORT = process.env.PORT || 8080;
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors());
app.use(helmet());

if (!isProduction) app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ status: 'OK!' });
});

app.post('/api/preview', async (req, res) => {
  const html = await renderFunc(req.body.blueprint);
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send({ html });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
