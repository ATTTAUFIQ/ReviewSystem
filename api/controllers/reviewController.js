const Review = require('../models/reviewModel');

// Add new review
exports.addReview = (req, res) => {
  const { user_name, product_id, rating, review_text } = req.body;
  const photo_url = req.file ? req.file.filename : null;

  if (!user_name || !product_id || (!rating && !review_text)) {
    return res.status(400).json({ message: 'Please provide user name, product ID, and at least rating or review.' });
  }

  // Prevent multiple reviews by same user on same product
  Review.checkUserReviewExists(user_name, product_id, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).json({ message: 'You have already reviewed this product.' });
    }

    const newReview = {
      user_name,
      product_id,
      rating,
      review_text,
      photo_url
    };

    Review.addReview(newReview, (err, result) => {
      if (err) throw err;
      res.status(201).json({ message: 'Review submitted successfully.' });
    });
  });
};

// Get all reviews for a product
exports.getReviewsByProduct = (req, res) => {
  const productId = req.params.productId;
  Review.getReviewsByProduct(productId, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
};
