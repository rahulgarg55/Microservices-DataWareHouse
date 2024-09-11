const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  supplierId: mongoose.Schema.Types.ObjectId,
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);
