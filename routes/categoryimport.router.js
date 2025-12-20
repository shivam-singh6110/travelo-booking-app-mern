const express = require("express");
const router = express.Router();
const category = require("../model/category.model");   // 
const categories = require("../data/categories");      //

router.route("/").post(async (req, res) => {
  try {
    // clear old data
    await category.deleteMany({});                //  FIX
    const categoriesInDB = await category.insertMany(categories.data); // ✅ FIX
    res.json(categoriesInDB);
  } catch (err) {
    console.log(err);
    res.json({ message: "could not add categories to DB" });
  }
});

module.exports = router;
