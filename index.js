const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Batch Docker lecture - Update 6');
});

app.listen(80, () => {
  console.log('Listening on port 80 ');
});
