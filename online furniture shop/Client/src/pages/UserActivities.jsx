import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserActivities.css'; // Optional CSS for styling

const UserActivities = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const wishlistResponse = await axios.get('/api/users/wishlist');
        const cartResponse = await axios.get('/api/users/cart');
        setWishlist(wishlistResponse.data);
        setCart(cartResponse.data);
      } catch (error) {
        console.error('Failed to fetch user activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="user-activities">
      <h1>User Activities</h1>
      <div className="wishlist">
        <h2>Wishlist</h2>
        <ul>
          {wishlist.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserActivities;
