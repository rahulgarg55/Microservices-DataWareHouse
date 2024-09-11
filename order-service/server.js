const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
const port = 3003;

app.use(express.json());
app.use('/api/orders', orderRoutes);

mongoose.connect('mongodb://localhost/order-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Order Service DB Connected'));

app.listen(port, () => {
  console.log(`Order service running on port ${port}`);
});
