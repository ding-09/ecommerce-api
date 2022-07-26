if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv').config();
}

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const ExpressError = require('./ExpressError');
const connectDB = require('./config/db');
const productsRoutes = require('./routes/products');

// initialize express
const app = express();

// set ejs view engine and path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

// connect to mongoose
connectDB();

// default route
app.get('/', (req, res) => {
  res.render('index');
});

// all /products routes are handled here
app.use('/products', productsRoutes);

// runs if no other routes are matched
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found!', 404));
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
