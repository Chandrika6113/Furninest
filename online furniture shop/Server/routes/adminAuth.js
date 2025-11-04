const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Admin login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username, password });

  if (admin) {
    res.json({ message: 'Admin login successful' });
  } else {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;
