const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    enum: ['Cereal', 'Syrup', ''],
    // required: true,
  },
  reviews: [{ body: String, rating: { type: Number, max: 5, min: 0 } }],
  tags: [String],
  quantity: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;