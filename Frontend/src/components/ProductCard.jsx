import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/api';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const ProductCard = ({ product }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await getReviews(product.id);
    setReviews(res.data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const averageRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
    : 'No ratings yet';

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Average Rating:</strong> {averageRating}</p>

      <ReviewForm productId={product.id} onReviewAdded={fetchReviews} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ProductCard;
