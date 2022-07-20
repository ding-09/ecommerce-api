const Product = require('../models/product');
const ExpressError = require('../ExpressError');

module.exports.allProducts = async (req, res, next) => {
  try {
    const { category } = req.query;
    let products;
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find({});
    }
    res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

module.exports.productsOnSale = async (req, res, next) => {
  try {
    const productsOnSale = await Product.find({ price: { $lte: 16 } });
    res.status(200).json(productsOnSale);
  } catch (e) {
    next(e);
  }
};

module.exports.productDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (e) {
    next(new ExpressError('Invalid product ID', 400));
  }
};
