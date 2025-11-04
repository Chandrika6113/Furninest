

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './wishlist.css';

function Wishlist() {
  // Load wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Load cart from localStorage (similar to wishlist)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Remove item from wishlist
  const removeFromWishlist = (productToRemove) => {
    const updatedWishlist = wishlist.filter(item => item._id !== productToRemove._id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update localStorage
  };

  // Add item to cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const itemExists = cart.some(item => item._id === product._id);
    
    if (!itemExists) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
      alert(`${product.name} added to cart.`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  };

  return (
    <>
      <h1>Your Wishlist</h1>
      <div className="wishlist-page">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-list">
            {wishlist.map((item, index) => (
              <div key={index} className="wishlist-item">
                <img src={item.imageUrl} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p><b>Price: RS.{item.price}</b></p>

                {/* Add to Cart Button */}
                <div className="wishlist_btns">
            
                <button className='s_btn2' onClick={() => addToCart(item)}>
                  Add to Cart
                </button>

                {/* Remove from Wishlist Button */}
                <button className='s_btn' onClick={() => removeFromWishlist(item)}>
                  Remove from Wishlist
                </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Link back to product page */}
        <Link to="/shop">
          <button className='s_btn'>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}

export default Wishlist;
