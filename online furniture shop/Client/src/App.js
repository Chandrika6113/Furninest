import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import AdminLogin from './AdminLogin';
import ProductPage from './pages/Productpage'; // Ensure the filename matches
import AdminDashboard from './pages/AdminDashboard';
import ManageProducts from './pages/ManageProducts';
import UserActivities from './pages/UserActivities';
import ManageAdmins from './pages/ManageAdmins';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';

import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard} />}>
            <Route path="products" element={<ManageProducts />} />
            <Route path="users" element={<UserActivities />} />
            <Route path="admins" element={<ManageAdmins />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
