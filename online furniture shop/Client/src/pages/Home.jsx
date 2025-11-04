// pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importing shopping cart icon
import './Home.css';
import Footer from '../components/Footer'; 
import velvet, { assets } from "../assets/assets"


// Function to fetch the image URL based on the product name
const getImageUrl = (productName) => {
  const imageMap = {
    'Modern Sofa': 'https://www.ulcdn.net/images/products/441899/original/FNSF51DDBK3_-_main_1.jpg?1638435760',
    'Dining Table Set': 'https://www.ulcdn.net/images/products/218930/slide/666x363/a.jpg?1548832283',
    'Luxury Armchair': 'https://www.ulcdn.net/images/products/953828/original/FNSF54TRFRA15_-_main_1.jpg?1725351638',
    'Coffee Table': 'https://ii1.pepperfry.com/media/catalog/product/m/a/1100x1210/max-coffee-table-in-choco-walnut--by-a-globia-creations-max-coffee-table-in-choco-walnut--by-a-globi-vogvsx.jpg',
    'Bookshelf': 'https://ii1.pepperfry.com/media/catalog/product/k/o/1100x1210/kosmo-book-shelf-in-glossy-vermount-finish-by-spacewood-kosmo-book-shelf-in-glossy-vermount-finish-b-ycz1wh.jpg',
    'Wardrobe': 'https://ii1.pepperfry.com/media/catalog/product/l/i/1100x1210/linden-4-door-wardrobe-with-mirror-by-spacewood-linden-4-door-wardrobe-with-mirror-by-spacewood-qyxbpy.jpg',
    'Bed': 'https://ii1.pepperfry.com/media/catalog/product/v/i/1100x1210/victor-sheesham-wood-queen-size-bed-in-scratch-resistant-provincial-teak-finish-with-hydraulic-stora-fzdg3u.jpg',
    'Recliner': 'https://ii1.pepperfry.com/media/catalog/product/a/v/1100x1210/avalon-fabric-manual-1-seater-recliner-in-grey-colour-avalon-fabric-manual-1-seater-recliner-in-grey-iwpfbh.jpg',
    'Desk': 'https://ii1.pepperfry.com/media/catalog/product/s/a/1100x1210/sayoko-hutch-desk-in-columbia-walnut-finish-sayoko-hutch-desk-in-columbia-walnut-finish-ewjm2c.jpg',
  };

  return imageMap[productName] || 'https://example.com/default.jpg';
};

const Home = ({ addToCart }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Modern Sofa',
      price: 32400,
      size: '84 inches',
      rating: 4,
    },
    {
      id: 2,
      name: 'Dining Table Set',
      price: 99347,
      size: '72 inches',
      rating: 5,
    },
    {
      id: 3,
      name: 'Luxury Armchair',
      price: 253500,
      size: '40 inches',
      rating: 5,
    },
  ]);

  const additionalProducts = [
    {
      id: 4,
      name: 'Coffee Table',
      price: 5799,
      size: '48 inches',
      rating: 4,
    },
    {
      id: 5,
      name: 'Bookshelf',
      price: 8699,
      size: '60 inches',
      rating: 5,
    },
    {
      id: 6,
      name: 'Wardrobe',
      price: 33999,
      size: '40 inches',
      rating: 5,
    },
    {
        id: 7,
        name: 'Bed',
        price: 70999,
        size: '60 inches',
        rating: 5,
      },
      {
        id: 8,
        name: 'Recliner',
        price: 18999,
        size: '25 inches',
        rating: 5,
      },
      {
        id: 9,
        name: 'Desk',
        price: 6099,
        size: '15 inches',
        rating: 4,
      },
  ];

  // Function to format the price in Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  return (
    <div className="home-container">
      {/* Posters Section */}
      <section className="posters">
        <h2>Explore Our Collection</h2>
        <div className="poster-grid">
          <Link to="/shop">
            <img src="https://www.nestroots.com/cdn/shop/files/NRDBCH50.01.jpg?v=1719316940" alt="Velvet Floral Chair" />
          </Link>
          <Link to="/shop">
            <img src={assets.velvet} alt="Velvet Sleek Chair" />
          </Link>
          <Link to="/shop">
            <img src="https://www.nestroots.com/cdn/shop/files/7.NRJSST08.jpg?v=1708323130" alt="Accent Side Table Set" />
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Latest Furniture</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={getImageUrl(product.name)} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.size}</p>
              </Link>
              <div className="product-info">
                <p className="product-price">{formatPrice(product.price)}</p>
                <button className="cart-btn" onClick={() => addToCart(product)}>
                  <FaShoppingCart /> {/* Shopping cart icon */}
                </button>
              </div>
              <div className="product-rating">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>&#9733;</span> // Star symbol
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner">
        <img src="https://img.freepik.com/premium-vector/vector-illustration-happy-ganesh-chaturthi-sale-social-media-story-feed-mockup-template_181203-20797.jpg" alt="Festival Sale Banner" />
      </section>

      {/* Additional Products Section */}
      <section className="products additional-products">
        <h2>Daily Use Furniture</h2>
        <div className="product-grid">
          {additionalProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <img src={getImageUrl(product.name)} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.size}</p>
              <p className="product-price">{formatPrice(product.price)}</p>
              <div className="product-rating">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>&#9733;</span> // Star symbol
                  ))}
              </div>
              <button className="cart-btn">
                <i className="fas fa-cart-plus"></i>
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Links Section */}
      <section className="additional-links">
        <Link to="/return-policy">Return Policy</Link>
        {/* Add more links here if needed */}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
