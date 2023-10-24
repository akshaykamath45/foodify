const mongoose = require("mongoose")
require("./db")
const Restaurant = require("./models/restaurant");
const { createRestaurant, readRestaurant } = require("./controllers/restaurantController");


// createRestaurant({
//   name:"McDonalds",
//   cuisine:"American",
//   address:"123 Fake Street",
//   city:"New York",
//   rating:4,
//   menu:[
//     {
//       name:"Big Mac",
//       price:5.99,
//       description:"A Big Mac is a hamburger sandwich consisting of one or more hamburger patties, sauce, lettuce, cheese, pickles, and onions, served in a slice of bread rolled up in buns.",
//       isVeg:false
//     },
//     {
//       name:"McChicken",
//       price:3.99,
//       description:"McChicken is a hamburger sandwich consisting of one or more hamburger patties, sauce, lettuce, cheese, pickles, and onions, served in a slice of bread rolled up in buns.",
//       isVeg:false
//     }],
//   averageRating:4.3
// })

readRestaurant("Curry House");
