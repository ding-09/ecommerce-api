const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const ExpressError = require('./ExpressError');
const connectDB = require('./config/db');

// connect to mongoose
connectDB();

// initialize express
const app = express();

const productsRoutes = require('./routes/products');

app.use('/products', productsRoutes);

// runs if no other routes are matched
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found!', 404));
  next();
});

// error handling
app.use((err, req, res, next) => {
  // destructure error with default values
  const { message = 'Something went wrong', statusCode = 500 } = err;
  res.status(statusCode).send(message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
