const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const adminAuthRoutes = require('./routes/adminAuth');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admins');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admins', adminRoutes);

const uri = 'mongodb+srv://palladeepika6305:NBv5lSslX066vJm4@deepika.5lwco.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('Server running on port 5000'));
