import React from 'react';

const ReviewList = ({ reviews }) => {
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <div>
      <h4>Reviews</h4>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <strong>{review.user_name}</strong>
          {review.rating && <span> | ⭐ {review.rating}</span>}
          <p>{review.review_text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
