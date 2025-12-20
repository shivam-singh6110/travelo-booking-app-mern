const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const hotelSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  imageArr: { type: Array, default: [] },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  numberOfBathrooms: { type: Number, required: true },
  numberOfBeds: { type: Number, required: true },
  numberOfGuests: { type: Number, required: true },
  numberOfBedrooms: { type: Number, required: true },
  amenities: { type: Array, default: [] },
  description: { type: String, default: "" }
});

module.exports = mongoose.model("Hotel", hotelSchema);
