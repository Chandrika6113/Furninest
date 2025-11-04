import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageAdmins.css'; // Optional CSS for styling

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: '', password: '' });

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('/api/admins');
        setAdmins(response.data);
      } catch (error) {
        console.error('Failed to fetch admins:', error);
      }
    };

    fetchAdmins();
  }, []);

  const handleAddAdmin = async () => {
    try {
      await axios.post('/api/admins', newAdmin);
      setNewAdmin({ username: '', password: '' });
      // Refresh admin list
      const response = await axios.get('/api/admins');
      setAdmins(response.data);
    } catch (error) {
      console.error('Failed to add admin:', error);
    }
  };

  const handleDeleteAdmin = async (id) => {
    try {
      await axios.delete(`/api/admins/${id}`);
      // Refresh admin list
      const response = await axios.get('/api/admins');
      setAdmins(response.data);
    } catch (error) {
      console.error('Failed to delete admin:', error);
    }
  };

  return (
    <div className="manage-admins">
      <h1>Manage Admins</h1>
      <div className="add-admin-form">
        <h2>Add New Admin</h2>
        <input
          type="text"
          placeholder="Username"
          value={newAdmin.username}
          onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={newAdmin.password}
          onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
        />
        <button onClick={handleAddAdmin}>Add Admin</button>
      </div>
      <h2>Admin List</h2>
      <ul>
        {admins.map((admin) => (
          <li key={admin._id}>
            <span>{admin.username}</span>
            <button onClick={() => handleDeleteAdmin(admin._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAdmins;
