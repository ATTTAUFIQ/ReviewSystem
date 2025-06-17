import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  return (
    <div>
      <h1>Product Ratings & Reviews</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
