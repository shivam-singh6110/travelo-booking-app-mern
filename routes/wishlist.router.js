const express = require("express");
const verifyUser = require("../middleware/verifyuser");
const wishlistController = require("../controllers/wishlistController");

const router = express.Router();

router
  .route("/")
  .post(verifyUser, wishlistController.createwishlistHandler)
  .get(verifyUser, wishlistController.getwishlistHandler);

router
  .route("/:id")
  .delete(verifyUser, wishlistController.deletewishlistHandler);

module.exports = router;
