const Order = require('../models/Order');

// Create Order
exports.createOrder = async (req, res) => {
  const { customerId, products, totalAmount } = req.body;
  const order = new Order({ customerId, products, totalAmount, status: 'pending', orderDate: new Date() });
  await order.save();
  res.json(order);
};

// Get All Orders
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};
