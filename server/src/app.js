import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from NodeJS server!');
});

app.listen(8080, () => {
  console.log('Server started on port 8080 🚀');
});
