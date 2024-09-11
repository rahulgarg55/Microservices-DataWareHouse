const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to User Service
router.post('/users/register', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3001/api/users/register', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with User Service' });
  }
});

// Route to Product Service
router.get('/products', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3002/api/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Product Service' });
  }
});

// Route to Order Service
router.post('/orders', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3003/api/orders', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Order Service' });
  }
});

// Route to Payment Service
router.post('/payments', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3004/api/transactions', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Payment Service' });
  }
});

module.exports = router;
