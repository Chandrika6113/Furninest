import React from 'react';
import { useParams } from 'react-router-dom';

// Mock data for product (in a real-world app, this data would come from an API or state)
const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    image: 'https://www.ulcdn.net/images/products/441899/original/FNSF51DDBK3_-_main_1.jpg?1638435760',
    price: 79999,
    size: '84 inches',
    rating: 4,
    description: 'A sleek modern sofa perfect for any living room.',
  },
  {
    id: 2,
    name: 'Dining Table Set',
    image: 'https://www.ulcdn.net/images/products/218930/slide/666x363/a.jpg?1548832283',
    price: 129999,
    size: '72 inches',
    rating: 5,
    description: 'A luxury dining table set to elevate your dining experience.',
  },
  {
    id: 3,
    name: 'Luxury Armchair',
    image: 'https://www.ulcdn.net/images/products/953828/original/FNSF54TRFRA15_-_main_1.jpg?1725351638',
    price: 49999,
    size: '40 inches',
    rating: 3,
    description: 'A comfortable and stylish armchair for relaxation.',
  },
  {
    id: 4,
    name: 'Coffee Table',
    image: 'https://ii1.pepperfry.com/media/catalog/product/v/i/1100x1210/victor-sheesham-wood-queen-size-bed-in-scratch-resistant-provincial-teak-finish-with-hydraulic-stora-fzdg3u.jpg',
    price: 5799,
    size: '48 inches',
    rating: 4,
    description: 'A comfortable and stylish armchair for relaxation.',
  },
  
  {
    id: 5,
    name: 'Bookshelf',
    image: 'https://ii1.pepperfry.com/media/catalog/product/k/o/1100x1210/kosmo-book-shelf-in-glossy-vermount-finish-by-spacewood-kosmo-book-shelf-in-glossy-vermount-finish-b-ycz1wh.jpg',
    price: 8699,
    size: '60 inches',
    rating: 5,
    description: 'A comfortable and stylish armchair for relaxation.',
  },
  {
    id: 6,
    name: 'Wardrobe',
    image: 'https://ii1.pepperfry.com/media/catalog/product/l/i/1100x1210/linden-4-door-wardrobe-with-mirror-by-spacewood-linden-4-door-wardrobe-with-mirror-by-spacewood-qyxbpy.jpg',
    price: 33999,
    size: '78 inches',
    rating: 5,
    description: 'A comfortable and stylish armchair for relaxation.',
  },
  {
    id: 7,
    name: 'Bed',
    image: 'https://ii1.pepperfry.com/media/catalog/product/v/i/1100x1210/victor-sheesham-wood-queen-size-bed-in-scratch-resistant-provincial-teak-finish-with-hydraulic-stora-fzdg3u.jpg',
    price: 33999,
    size: '60 inches',
    rating: 5,
    description: 'A comfortable and stylish armchair for relaxation.',
  },

  {
    id: 8,
    name: 'Recliner',
    image: 'https://ii1.pepperfry.com/media/catalog/product/a/v/1100x1210/avalon-fabric-manual-1-seater-recliner-in-grey-colour-avalon-fabric-manual-1-seater-recliner-in-grey-iwpfbh.jpg',
    price: 18999,
    size: '25 inches',
    rating: 5,
    description: 'A comfortable and stylish armchair for relaxation.',
  },

  {
    id: 9,
    name: 'Desk',
    image: 'https://ii1.pepperfry.com/media/catalog/product/s/a/1100x1210/sayoko-hutch-desk-in-columbia-walnut-finish-sayoko-hutch-desk-in-columbia-walnut-finish-ewjm2c.jpg',
    price: 6099,
    size: '15 inches',
   rating: 4,
    description: 'A comfortable and stylish armchair for relaxation.',
  },
  
];

// Function to format the price in Indian Rupees
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
};

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '50%' }} />
      <p>{product.description}</p>
      <p>Size: {product.size}</p>
      <p>Price: {formatPrice(product.price)}</p>
      <div style={{ color: '#f0a500' }}>
        {Array(product.rating)
          .fill()
          .map((_, i) => (
            <span key={i}>&#9733;</span>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
