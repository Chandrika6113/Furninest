import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import './shop.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    axios.get('http://localhost:5009/api/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const updateCart = (product, operation) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item._id === product._id);
    
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (operation === 'increase') {
        updatedCart[existingItemIndex].quantity += 1;  // Increase quantity
      } else if (operation === 'decrease') {
        if (updatedCart[existingItemIndex].quantity > 1) {
          updatedCart[existingItemIndex].quantity -= 1; // Decrease quantity
        } else {
          updatedCart.splice(existingItemIndex, 1); // Remove item if quantity is 1
        }
      }
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else if (operation === 'increase') {
      // If the item is not in the cart, add it with quantity 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    toast.success(`Item ${operation === 'increase' ? 'added' : 'removed'} to/from Cart`);
  };

  const addToWishlist = (product) => {
    if (!wishlist.some(item => item._id === product._id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      toast.success('Item added to Wishlist');
    } else {
      alert('Item already in wishlist');
    }
  };

  return (
    <div className="App">
      {/* Toast messages renderer */}
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={assets.wishlist} alt="" className='wishlist' onClick={() => addToWishlist(product)} />
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} className='p_image' />}
            <h2><b>{product.name}</b></h2>
            <p>{product.description}</p>
            <p><b>Price: RS.{product.price}</b></p>

            {/* Quantity control for the product */}
            <div className="quantity-controls">
              <button 
                className="quantity-btn" 
                onClick={() => updateCart(product, 'decrease')} 
                disabled={!cart.some(item => item._id === product._id) || cart.find(item => item._id === product._id).quantity === 1}
              >
                -
              </button>
              <span>
                {cart.find(item => item._id === product._id) 
                  ? cart.find(item => item._id === product._id).quantity
                  : 0}
              </span>
              <button 
                className="quantity-btn" 
                onClick={() => updateCart(product, 'increase')}
              >
                +
              </button>
            </div>

            <button className='s_btn' onClick={() => updateCart(product, 'increase')}>
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <Link to="/cart">
        <button className='s_btn'>Go to Cart</button>
      </Link>

      <Link to="/cart">
        <button className='s_btn'>Go to Cart</button>
      </Link>
    </div>
  );
}

export default Product;
