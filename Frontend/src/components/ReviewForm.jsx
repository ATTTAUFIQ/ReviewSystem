import React, { useState } from 'react';
import { addReview } from '../services/api';

const ReviewForm = ({ productId, onReviewAdded }) => {
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || (!rating && !reviewText)) {
      setMessage('Please enter your name and at least a rating or review.');
      return;
    }

    try {
      const formData = {
        user_name: userName,
        product_id: productId,
        rating: rating ? parseInt(rating) : null,
        review_text: reviewText
      };

      await addReview(formData);
      setMessage('Review submitted successfully!');
      onReviewAdded();

      // Clear form
      setUserName('');
      setRating('');
      setReviewText('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error submitting review.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Review</h4>
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        min="1"
        max="5"
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        placeholder="Write your review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p style={{ color: 'green' }}>{message}</p>
    </form>
  );
};

export default ReviewForm;
