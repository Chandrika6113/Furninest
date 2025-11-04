const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Get all admins
router.get('/', async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
});

// Add a new admin
router.post('/', async (req, res) => {
  const newAdmin = new Admin(req.body);
  await newAdmin.save();
  res.status(201).json(newAdmin);
});

// Delete an admin
router.delete('/:id', async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
