const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transactions', transactionController.createTransaction);
router.get('/transactions/:id', transactionController.getTransaction);
router.put('/transactions/:id/status', transactionController.updateTransactionStatus);

module.exports = router;
