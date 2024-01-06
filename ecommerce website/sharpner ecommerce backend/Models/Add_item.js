const mongoose = require('mongoose');

// Define the AddData schema
const AddDataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  // You can include other fields relevant to user AddData here
});

// Create the AddData model
const AddData = mongoose.model('ecommerce', AddDataSchema);

module.exports = AddData;
