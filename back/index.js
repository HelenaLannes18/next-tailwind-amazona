const express = require('express');
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// Export the Express API
module.exports = app;
