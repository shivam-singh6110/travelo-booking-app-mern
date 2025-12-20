const { v4: uuid } = require("uuid");

const hotels = {
  "data": [
    {
      id: uuid(),
      name: "HighQ Manali / Deluxe Room",
      category: "General",
      image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      address: "Manali, Himachal Pradesh, India",
      city: "Manali",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Highq manali / 3 BHK Cottage",
      category: "General",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      address: "Manali, Himachal Pradesh, India",
      city: "Manali",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Best view of the river from your terrace 04",
      category: "General",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      address: "Goa, India",
      city: "Morjim",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Shabashe",
      category: "General",
      image: "https://plus.unsplash.com/premium_photo-1661962769148-fbe587e60fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      imageArr: [
        "https://plus.unsplash.com/premium_photo-1661962769148-fbe587e60fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1661962769148-fbe587e60fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1661962769148-fbe587e60fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
      ],
      address: "Bhuntar, Himachal Pradesh, India",
      city: "Bhuntar",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Luxurious Independent Studio with Wifi & Kitchen",
      category: "General",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Jaipur, Rajasthan, India",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Aman Palace Guest House Kasol With Super Deluxe Room",
      category: "General",
      image: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww",
      imageArr: [
        "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww"
      ],
      address: "Bhuntar, Himachal Pradesh, India",
      city: "Bhuntar",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Aman Palace Guest House Kasol With Deluxe Room",
      category: "General",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Bhuntar, Himachal Pradesh, India",
      city: "Bhuntar",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Boutique destination wedding experience  50pax pkg",
      category: "General",
      image: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Gurugram, Haryana, India",
      city: "Gurugram",
      state: "Haryana",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Lux farm resort with pool - Villa",
      category: "General",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
      imageArr: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww"
      ],
      address: "Ganaheda, Rajasthan, India",
      city: "Ganaheda",
      state: "Rajasthan",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Deluxe Room",
      category: "General",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
      imageArr: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww"
      ],
      address: "Banjar, Himachal Pradesh, India",
      city: "Banjar",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Vedatmana By The Waves, Morjim",
      category: "General",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
      imageArr: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww"
      ],
      address: "Morjim, Goa, India",
      city: "Morjim",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Marriage  Or Party Full Resort For 30 Persons",
      category: "General",
      image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Gurugram, Haryana, India",
      city: "Gurugram",
      state: "Haryana",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "StayVista - Pranaam - 6Bhk Luxury Alibaug",
      category: "General",
      image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Awas, Maharashtra, India",
      city: "Alibaug",
      state: "Maharashtra",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Luxury PoolSide Heritage Villa in Lap of Nature",
      category: "General",
      image: "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D"
      ],
      address: "Bengaluru, Karnataka, India",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "12 BR Mansion | Big Groups | Private Pool | Scenic",
      category: "General",
      image: "https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwbG9iYnl8ZW58MHx8MHx8fDA%3D"
      ],
      address: "Sangolda, Goa, India",
      city: "Goa",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "An extravagant Pushp villa overlooking the Ganges",
      category: "General",
      image: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Rishikesh, Uttarakhand, India",
      city: "Rishikesh",
      state: "Uttarakhand",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Perfect for Big Groups! 8BR Villa w Pool in Parra",
      category: "General",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcmVjZXB0aW9ufGVufDB8fDB8fHww",
      imageArr: [
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcmVjZXB0aW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcmVjZXB0aW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcmVjZXB0aW9ufGVufDB8fDB8fHww"
      ],
      address: "Parra, Goa, India",
      city: "Goa",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Brookwood Gardens Wedding Guest Rooms",
      category: "General",
      image: "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "New Delhi, Delhi, India",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Pahalgham Cottage Next to the River",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Aru, India",
      city: "Aru",
      state: "uttrakhand",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Crystal Village 10 Bedroom Pvt Pool villa Nagoa",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "North Goa, Goa, India",
      city: "North Goa",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Flamingo lovely boutique villa 11 bed Luxury Space",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Mararikulam, Kerala, India",
      city: "Mararikulam",
      state: "Kerala",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "10 BHK Luxury Villa w Pool - Modern Cottage Style",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Awas, Maharashtra, India",
      city: "Awas",
      state: "Maharashtra",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "6 BHK Villa W/pool,wifi- LuaCheia,canacona , Goa",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Canacona, Goa, India",
      city: "Canacona",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Luxury Entire Heritage Villa, Wifi",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Nainital, Uttarakhand, India",
      city: "Nainital",
      state: "Uttarakhand",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "A majestic luxurious villa overlooking the Ganges",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Pathau, Uttarakhand, India",
      city: "Pathau",
      state: "Uttarakhand",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Azara Serenidad 5BHK Private Pool Villa in Anjuna",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Anjuna, Goa, India",
      city: "Anjuna",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Homfortable Loshgyani Estate-Rustic forest retreat",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Nathuwakhan, Uttarakhand, India",
      city: "Nathuwakhan",
      state: "Uttarakhand",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Entire boutique stay with 8 rooms Khvaab Manali",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Manali, Himachal Pradesh, India",
      city: "Manali",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Casa Susegad - Restored Indo-Portuguese Mansion",
      category: "Homestay",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Loutolim, Goa, India",
      city: "Loutolim",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "8BHK(2X4) Super Luxurious @candolim",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Candolim, Goa, India",
      city: "Candolim",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Private Pool Villa with meals for 10+ guests.",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Karjat, Maharashtra, India",
      city: "Karjat",
      state: "Maharashtra",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Assagao Bay: Luxury Villa by the Rose Nomad",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Assagao, Goa, India",
      city: "Assagao",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Mohan Niwas Palace, A Heritage Homestay in Panna.",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Panna, Madhya Pradesh, India",
      city: "Panna",
      state: "Madhya Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Welcome to 16 Bedroom Gem hidden in Nature!",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Nashik, Maharashtra, India",
      city: "Nashik",
      state: "Maharashtra",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "45 foot 3BR Yacht at Mumbai Harbour",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Mumbai, Maharashtra, India",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Himalayan Kothi, Kais",
      category: "Resort",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Kullu, Himachal Pradesh, India",
      city: "Kullu",
      state: "Himachal Pradesh",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "StayVista at 5 rooms @ Vyoman",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Lonavla, Maharashtra, India",
      city: "Lonavla",
      state: "Maharashtra",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "PALACIO   LONAVALA",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Lonavla, Maharashtra, India",
      city: "Lonavla",
      state: "Maharashtra",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "22BHK(5+5+6+6) PRIVATE POOL VILLA near CANDOLIM",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Nerul, Goa, India",
      city: "Nerul",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Woods Goa Bunglow",
      category: "General",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "SALIGAO, Goa, India",
      city: "Saligao",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    },
    {
      id: uuid(),
      name: "Room at Ribandar Hill ..Value for money 01",
      category: "villa",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
      imageArr: [
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBsb2JieXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      address: "Ribandar, Goa, India",
      city: "Ribandar",
      state: "Goa",
      country: "India",
      price: 2500,
      rating: 4.0,
      numberOfBathrooms: 1,
      numberOfBeds: 1,
      numberOfGuests: 2,
      numberOfBedrooms: 1,
      amenities: [
        "WiFi",
        "Parking"
      ],
      description: "nothing"
    } 
  ]
};

module.exports = hotels;