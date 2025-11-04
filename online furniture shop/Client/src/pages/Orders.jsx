import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5009/api/orders')
      .then(response => {
        // Reverse the array to show the latest orders first
        const reversedOrders = response.data.reverse();
        setOrders(reversedOrders);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const cancelOrder = (orderId) => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      axios.put(`http://localhost:5009/api/orders/${orderId}`, { status: 'Cancelled' })
        .then(() => {
          alert('Order cancelled successfully!');
          setOrders(prev =>
            prev.map(order => order._id === orderId ? { ...order, status: 'Cancelled' } : order)
          );
        })
        .catch(error => console.error('Error cancelling order:', error));
    }
  };

  const filteredOrders = filteredStatus === 'All'
    ? orders
    : orders.filter(order => order.status === filteredStatus);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>

      <div className="filter-container">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={filteredStatus}
          onChange={(e) => setFilteredStatus(e.target.value)}
        >
          <option>All</option>
          <option>Placed</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
      </div>

      {filteredOrders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <div className="orders-list">
          {filteredOrders.map((order, index) => (
            <div key={order._id} className="order-item">
              <h2>Order {index + 1}</h2>
              <h3>Customer Details</h3>
              <p><b>Name:</b> {order.customer.name}</p>
              <p><b>Email:</b> {order.customer.email}</p>
              <p><b>Address:</b> {order.customer.address}</p>
              <p><b>Phone:</b> {order.customer.phone}</p>

              <h3>Items</h3>
              {order.items.map((item, i) => (
                <p key={i}>
                  <img src={item.imageUrl} alt={item.name} className="Item_img" />
                  {item.name} - ₹{item.price}
                </p>
              ))}

              <div className={`status-badge ${order.status?.toLowerCase()}`}>
                {order.status || 'Placed'}
              </div>

              <h3>Total Price: ₹{order.total}</h3>

              {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
                <button
                  className="s_btn2 cancel-btn"
                  onClick={() => cancelOrder(order._id)}
                >
                  Cancel Order
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
