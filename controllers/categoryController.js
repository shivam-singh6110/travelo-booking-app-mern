const category = require("../model/category.model");   //



const categoryHandler= async (req, res) => {
  try {
    const categories = await category.find({});
    res.json(categories);
  } catch (err) {
    res.status(400).json({ message: "could not find categories " });
  }
}
module.exports = categoryHandler;