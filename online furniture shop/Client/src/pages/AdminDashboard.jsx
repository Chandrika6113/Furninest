import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AdminDashboard.css'; // Optional CSS for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <ul>
          <li><Link to="/admin/products">Manage Products</Link></li>
          <li><Link to="/admin/users">User Activities</Link></li>
          <li><Link to="/admin/admins">Manage Admins</Link></li>
        </ul>
      </nav>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
