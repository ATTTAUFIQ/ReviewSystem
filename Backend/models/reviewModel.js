const db = require('../config/db');

// Add a new review
exports.addReview = (review, callback) => {
  const sql = `INSERT INTO reviews (user_name, product_id, rating, review_text, photo_url)
               VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [review.user_name, review.product_id, review.rating, review.review_text, review.photo_url], callback);
};

// Get reviews for a product
exports.getReviewsByProduct = (productId, callback) => {
  const sql = `SELECT * FROM reviews WHERE product_id = ?`;
  db.query(sql, [productId], callback);
};

// Check if user already reviewed a product
exports.checkUserReviewExists = (user_name, product_id, callback) => {
  const sql = `SELECT * FROM reviews WHERE user_name = ? AND product_id = ?`;
  db.query(sql, [user_name, product_id], callback);
};
