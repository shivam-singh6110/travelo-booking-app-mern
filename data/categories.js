const { v4: uuid } = require("uuid");

const categories = {
  data: [
    { id: uuid(), category: "General" },
    { id: uuid(), category: "Resort" },
    { id: uuid(), category: "Villa" },
    { id: uuid(), category: "Homestay" },
    { id: uuid(), category: "Luxury" }
  ]
};

module.exports = categories;
