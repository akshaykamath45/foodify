const mongoose = require("mongoose")
require("./db")
const Restaurant = require("./models/restaurant");
const { createRestaurant, readRestaurant, readAllRestaurants, readRestaurantsByCuisine, updateRestaurant, deleteRestaurant, searchRestaurantsByLocation, filterRestaurantsByRating, addDishToMenu, removeDishFromMenu, addUserReviewAndRating } = require("./controllers/restaurantController");


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

// readRestaurant("Curry House");

// readAllRestaurants()

// readRestaurantsByCuisine("Indian")

// updateRestaurant("6537e73743222d8c2709937a",updatedRestaurant)

// deleteRestaurant("6537e73743222d8c27099382")

// searchRestaurantsByLocation("Mumbai")

// filterRestaurantsByRating(4)

// const dish={
//   name: "Paneer Tikka",
//   price: 199.99,
//   description: "A popular Indian appetizer made with marinated and grilled cubes of paneer (Indian cottage cheese). Served with mint chutney.",
//   isVeg: true
// }
// addDishToMenu("6537e73743222d8c2709937e",dish)


// removeDishFromMenu("6537e73743222d8c2709937e","Paneer Tikka")


addUserReviewAndRating("651713d694ff938e9cbae672", "6537e73743222d8c2709937e", "Good food!", 4.3)

addUserReviewAndRating("651716042aae85c17d458e57", "6537e73743222d8c2709937e", "Did not like the food", 3.3)