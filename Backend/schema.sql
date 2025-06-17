CREATE DATABASE IF NOT EXISTS reviews_db;
USE reviews_db;

CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(100) NOT NULL,
  product_id INT NOT NULL,
  rating INT,
  review_text TEXT,
  photo_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
