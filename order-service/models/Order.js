const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  products: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
  status: { type: String, enum: ['pending', 'shipped', 'delivered'] },
  totalAmount: Number,
  orderDate: Date
});

module.exports = mongoose.model('Order', orderSchema);
