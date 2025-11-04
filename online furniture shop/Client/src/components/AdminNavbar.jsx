import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <h1>FurniNest Admin</h1>
      <ul>
        <li><Link to="/admin/products">Products</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/orders">Orders</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
