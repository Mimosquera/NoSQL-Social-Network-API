const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure this is correct
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 API server running on http://localhost:${PORT}`);
  });
});