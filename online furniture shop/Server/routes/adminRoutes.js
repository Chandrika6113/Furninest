const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const orders = await Order.find(); // ✅ fetch from DB
    res.json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err); // 🔍 See exact error
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

module.exports = router;


