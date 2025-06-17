import axios from 'axios';

const API_BASE_URL = 'https://review-system-7w8u.onrender.com/api';

export const getReviews = (productId) => {
  return axios.get(`${API_BASE_URL}/reviews/${productId}`);
};

export const addReview = (formData) => {
  return axios.post(`${API_BASE_URL}/reviews`, formData);
};
