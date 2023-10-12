const express = require('express');
const path = require('path');

const app = express();
const PORT = 1360;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server running...');
});
