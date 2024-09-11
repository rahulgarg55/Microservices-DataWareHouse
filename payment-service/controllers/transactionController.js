const Transaction = require('../models/Transaction');

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { customerId, orderId, amount } = req.body;

    const transaction = new Transaction({
      customerId,
      orderId,
      amount
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

// Get transaction by ID
exports.getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transaction' });
  }
};

// Update payment status
exports.updateTransactionStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    transaction.paymentStatus = status;
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update transaction status' });
  }
};
