const express = require("express");
const router = express.Router();
const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");
 

router.route("/").post(async (req, res) => {
  try {
    // clear old data
    await Hotel.deleteMany({});
    const hotelsInDB = await Hotel.insertMany(hotels.data);
    res.json(hotelsInDB);
  } catch (err) {
    console.log(err);
    res.json({ message: "could not add data to DB" });
  }
});

module.exports = router;
