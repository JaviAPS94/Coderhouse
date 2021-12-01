// server.js
const compression = require('compression');
const express = require('express');
const app = express();

// Comprimir todas las respuestas HTTP

app.use(compression());

app.get('/', (req, res) => {
  const brand = 'nike';
  res.send(brand.repeat(1000));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});