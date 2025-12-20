const Hotel = require("../model/hotel.model");

const getAllHotelHandler = async (req, res) => {
  const hotelcategory=req.query.category;
  //http://localhost:3500/api/hotels?category=beach
  try {
    let hotels; 
    if (hotelcategory) {
      hotels = await Hotel.find({ category: hotelcategory });
    } else {
      hotels = await Hotel.find({});
    }
    hotels ? res.json(hotels) : res.status(404).json({ message: "No data found" });

  } catch (err) {
    console.error(err);
  }
}
module.exports = getAllHotelHandler; 