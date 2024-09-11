const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Customer'
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Order'
  },
  amount: {
    type: Number,
    required: true
  },
  transactionDate: {
    type: Date,
    default: Date.now
  },
  paymentStatus: {
    type: String,
    enum: ['completed', 'pending', 'failed'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
