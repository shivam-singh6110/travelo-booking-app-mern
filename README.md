Travelo Booking App – Backend

  This repository contains the backend API for the Travelo Booking Application, built using Node.js, Express, and MongoDB.
  It provides REST APIs for hotels, categories, authentication, and wishlist functionality, which are consumed by the React frontend.

About the Project:

  Travelo is a hotel booking application where users can:

  Browse hotels

  Filter hotels by category

  View single hotel details

  Create an account and log in

  Add hotels to a wishlist

  This backend handles all data, authentication, and business logic.

Tech Stack Used:

  Node.js – JavaScript runtime

  Express.js – Backend framework

  MongoDB – Database

  Mongoose – MongoDB ODM

  JWT (jsonwebtoken) – User authentication

  Crypto-JS – Password encryption

  CORS – Cross-origin support

  dotenv – Environment variables

  UUID – Unique ID generation

  Nodemon – Development tool


Project Structure:

  travelo-booking-app-mern/
│
├── config/
│   └── dbconfig.js           
│
├── controllers/              
│   ├── auth.controller.js
│   ├── hotel.controller.js
│   ├── category.controller.js
│   ├── singleHotel.controller.js
│   └── wishlist.controller.js
│
├── middleware/
│   └── verifyUser.js        
│
├── models/
│   ├── hotel.model.js
│   ├── category.model.js
│   └── user.model.js
│
├── routes/ 
│   ├── auth.router.js
│   ├── hotel.router.js
│   ├── singlehotel.router.js
│   ├── category.router.js
│   ├── wishlist.router.js
│   ├── dataimport.router.js
│   └── categoryimport.router.js
│
├── server.js                 
├── package.json
└── README.md
