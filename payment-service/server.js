const express = require('express');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/payment-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
