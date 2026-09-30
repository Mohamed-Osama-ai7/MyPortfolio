const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


// Initialize Express app
const app = express();


// =========================
// Middleware
// =========================

app.use(cors());

app.use(express.json());

app.use(
  '/files',
  express.static(
    path.join(__dirname, 'uploads')
  )
);


// =========================
// MongoDB Connection
// =========================

mongoose
  .connect(
    process.env.MONGO_URI ||
    'mongodb://localhost:27017/portfolio_db'
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(
      'MongoDB connection error:',
      err
    );
  });


// =========================
// Routes
// =========================

const project = require('./project');

app.use(
  '/api/project',
  project
);


// =========================
// Start Server
// =========================

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});