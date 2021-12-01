// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const brand = 'nike';
  res.send(brand.repeat(1000));
});

app.listen(3000, () => {
  console.log('Example gzip app listening on port 3000!');
});