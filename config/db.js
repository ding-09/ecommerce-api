const mongoose = require('mongoose');
const products = require('../seeds/products');
const Product = require('../models/product');


const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log('MONGO CONNECTION OPEN');

    // seed DB
    // delete pre-existing data before adding new ones
    const seedDB = async () => {
      await Product.deleteMany({});
      await Product.insertMany(products);
    };

    seedDB().then(() => {
      console.log('closing');
      mongoose.connection.close();
    });
  } catch (e) {
    process.exit(1);
  }
};

module.exports = connectDB;
