const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

require('./routes')(app);

app.get('*', (req, res) => {
  res.status(200).send({ message: 'Server is running' });
});

module.exports = app;
