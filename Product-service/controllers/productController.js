const Product = require('../models/Product');

// Create Product
exports.createProduct = async (req, res) => {
  const { name, description, price, supplierId, stock } = req.body;
  const product = new Product({ name, description, price, supplierId, stock });
  await product.save();
  res.json(product);
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
