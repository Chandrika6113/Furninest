const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  stock: Number
});

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
