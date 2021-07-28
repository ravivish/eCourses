const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  headline: { type: String, required: true },
  description: { type: String, required: true },
  badge: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imgurl: { type: String, required: true },
  ratings: [
    {
      rating: { type: Number, required: true },
      review: { type: String, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
