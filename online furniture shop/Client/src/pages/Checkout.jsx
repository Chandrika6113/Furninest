import React, { useState } from 'react';
import './checkout.css';

function Checkout() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Submit order and save it to localStorage
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!customerDetails.name || !customerDetails.email || !customerDetails.address || !customerDetails.phone) {
      alert('Please fill in all your details before placing the order.');
      return;
    }

    const newOrder = {
      customer: customerDetails,
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    try {
      const response = await fetch('http://localhost:5009/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Order placed successfully!');
        setCart([]);
        setCustomerDetails({ name: '', email: '', address: '', phone: '' });
        localStorage.removeItem('cart');
      } else {
        alert(`Error: ${data.message || 'Something went wrong!'}`);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handlePlaceOrder} className="checkout-form">
        <h2>Customer Details</h2>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={customerDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={customerDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Street, City, Country"
            value={customerDetails.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1234567890"
            value={customerDetails.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <h2>Cart Summary</h2>
        <div className="cart-summary">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-list2">
              {cart.map((item, index) => (
                <div key={index} className="cart-item2">
                  <img src={item.imageUrl} alt={item.name} />
                  <p>
                    <b>{item.name}</b> - ₹{item.price}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="checkout_btns">
          <h3>Total Price: ₹{totalPrice}</h3>
          <button type="submit" className="s_btn2">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
