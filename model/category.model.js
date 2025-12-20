const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const categorySchema = new mongoose.Schema({
  
  category: { type: String, required: true }
});

module.exports = mongoose.model("Category", categorySchema);