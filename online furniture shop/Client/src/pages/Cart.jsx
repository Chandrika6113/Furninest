import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

function Cart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Add or update item in the cart
  const addToCart = (productToAdd) => {
    const existingItem = cart.find(item => item._id === productToAdd._id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if item already exists
    } else {
      cart.push({ ...productToAdd, quantity: 1 }); // Add new item with quantity 1
    }
    setCart([...cart]); // Update state
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
  };

  // Remove one item from the cart based on quantity
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.map(item => {
      if (item._id === productToRemove._id) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrease quantity if more than 1
        } else {
          return null; // If quantity is 1, remove the item
        }
      }
      return item;
    }).filter(item => item !== null); // Remove null items (those with quantity 0)

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <>
      <h1>Your Cart</h1>
      <div className="cart-page">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className="cart-list">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.imageUrl} alt="" />
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p><b>Price: RS.{item.price}</b></p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="s_btn2" onClick={() => removeFromCart(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18M9 6v12M15 6v12M5 6l1-4h12l1 4H5z" />
                    </svg>
                    <span>Remove one</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Total Price Section */}
            <div className="cart-total">
              <h2>Total Price: RS.{totalPrice}</h2>
              <div className="btn_last">
                <Link to="/shop">
                  <button className='cont_btn'>Continue Shopping</button>
                </Link>
                <Link to="/checkout">
                  <button className='cont_btn'>Check out</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
