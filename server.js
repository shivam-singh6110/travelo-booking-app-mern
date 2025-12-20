const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const hotelDataaddedToDBRouter = require("./routes/dataimport.router");

const categoryDataaddedToDBRouter = require("./routes/categoryimport.router");


const hotelRouter = require("./routes/hotel.router");

const categoryRouter = require("./routes/category.router");

const singleHotelRouter = require("./routes/singlehotel.router");

const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const connectDB = require("./config/dbconfig");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3500;

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Travelo Booking App API");
});

app.use("/api/hoteldata", hotelDataaddedToDBRouter);
app.use("/api/categorydata", categoryDataaddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB database");

    app.listen(PORT, () => {
      console.log(`Server is up and running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server start failed:", error.message);
    process.exit(1);
  }
};

startServer();
