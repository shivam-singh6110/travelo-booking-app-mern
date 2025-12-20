const Wishlist = require("../model/wishlist.model");

const createwishlistHandler = async (req, res) => {
  try {
    const newwishlist = new Wishlist(req.body);
    const savedwishlist = await newwishlist.save();
    res.status(201).json(savedwishlist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "failed to create wishlist" });
  }
};

const deletewishlistHandler = async (req, res) => {
  try {
    const deleted = await Wishlist.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Wishlist item not found" });
    }

    res.json({ message: "Hotel Deleted From wishlist" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "could not delete hotel from wishlist" });
  }
};

const getwishlistHandler = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({});
    res.json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  createwishlistHandler,
  deletewishlistHandler,
  getwishlistHandler
};
