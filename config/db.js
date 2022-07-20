const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log('MONGO CONNECTION OPEN');
  } catch (e) {
    process.exit(1);
  }
};

module.exports = connectDB;
