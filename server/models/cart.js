const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  sessionid: {
    type: String,
    required: true,
    unique: true,
  },
  products: [
    {
      _id: { type: String, required: true },
      title: { type: String, required: true },
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
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
