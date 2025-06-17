const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const upload = require('../middleware/upload');

// Routes
router.post('/reviews', upload.single('photo'), reviewController.addReview);
router.get('/reviews/:productId', reviewController.getReviewsByProduct);

module.exports = router;
