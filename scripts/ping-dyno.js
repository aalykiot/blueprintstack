const https = require('https');

https.get(process.env.HEROKU_APP_URL, res => {
  console.log(res.statusCode);
});
