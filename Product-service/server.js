const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = 3002;

app.use(express.json());
app.use('/api/products', productRoutes);

mongoose.connect('mongodb://localhost/product-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Product Service DB Connected'));

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
