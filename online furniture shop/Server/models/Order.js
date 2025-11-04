// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    address: String,
    phone: String
  },
  items: [
    {
      name: String,
      price: Number,
      imageUrl: String
    }
  ],
  total: Number,
  
  status: {
    type: String,
    default: 'Pending'
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
