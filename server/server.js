const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Helloccc');
});

app.listen(3000, () => {
  console.log('listening in port 3000');
});
