const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
  Authorization');
  next();
});
app.use(morgan('dev'))

app.get('/api', (req, res)=> {
  let q = req.query.q;
  if (/^#javascript/ig.test(q)) {
    return res.json(require('./mocks/javascript'));
  }
  else if (/^#css/ig.test(q)) {
    return res.json(require('./mocks/css'));
  }
  else if (/^#frontend/ig.test(q)) {
    return res.json(require('./mocks/frontend'));
  }
  else if (/^#laravel/ig.test(q)) {
    return res.json(require('./mocks/laravel'));
  }
  else if (/^#webdevelopment/ig.test(q)) {
    return res.json(require('./mocks/webdevelopment'));
  }
  else if (/^#webperf/ig.test(q)) {
    return res.json(require('./mocks/webperf'));
  }
  else if (/^#python/ig.test(q)) {
    return res.json(require('./mocks/python'));
  }
  else if (/^#php/ig.test(q)) {
    return res.json(require('./mocks/php'));
  } else {
    return res.json(
      {
        statuses: [
          {
            text:'Twitter\'s does not admit requests from localhost. Due to this I have mocked responses powered by nodeJS.\
            Available queries: #javascript or #python #php #frontend #css #laravel #webdevelopment #webperf',
            user: {
              screen_name: 'serguey_arellano',
            },
            retweet_count: 6
          }]});
  }
});
app.listen(3000, function (req, res) {
  console.log('listening on port 3000!');
});
