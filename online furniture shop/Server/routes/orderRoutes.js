const express = require('express');
const router = express.Router();
const Order = require('../models/Order');  // Ensure you have the correct path to the Order model

// GET orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();  // Fetch all orders from the database
    res.json(orders);  // Return the orders in the response
  } catch (err) {
    console.error('Error fetching orders:', err.message);  // Log the error message for debugging
    res.status(500).json({ error: 'Error fetching orders' });  // Send a 500 error if something goes wrong
  }
});

// POST new order
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);  // Create a new order from the request body
    await newOrder.save();  // Save the order to the database
    res.status(201).json(newOrder);  // Return the created order with status 201
  } catch (err) {
    console.error('Error creating order:', err.message);  // Log the error message
    res.status(500).json({ error: 'Error saving order' });  // Return error status and message if order creation fails
  }
});

// PUT to update order status
router.put('/:id', async (req, res) => {
  console.log('Received PUT request for order ID:', req.params.id);  // Log the ID
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (err) {
    console.error('Error updating order:', err.message);
    res.status(500).json({ error: 'Failed to update order' });
  }
});


module.exports = router;
