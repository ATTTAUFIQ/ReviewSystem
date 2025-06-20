const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', reviewRoutes);

// Start index
app.listen(PORT, () => {
  console.log(`Index is running on port ${PORT}`);
});
