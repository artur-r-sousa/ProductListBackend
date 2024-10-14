const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./products.json'); // Arquivo com os dados dos produtos

app.use(cors());

app.get('/api/products', (req, res) => {
  const searchQuery = req.query.search ? req.query.search.toLowerCase() : '';
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );
  res.json(filteredProducts);
});

app.get('/api/report', (req, res) => {
  res.json({ totalProducts: products.length });
});

app.listen(3000, () => {
  console.log('Backend rodando na porta 3000');
});
