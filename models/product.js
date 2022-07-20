const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['women', 'men', 'kids'],
  },
  image: {
    mobile: {
      type: String,
    },
    tablet: {
      type: String,
    },
    desktop: {
      type: String,
    },
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
