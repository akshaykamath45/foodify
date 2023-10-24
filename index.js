const mongoose = require("mongoose")
require("./db")
const Restaurant = require("./models/restaurant");
const { createRestaurant, readRestaurant, readAllRestaurants, readRestaurantsByCuisine, updateRestaurant } = require("./controllers/restaurantController");


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


//updated city,rating,and average rating
const updatedRestaurant = {
    name: "Samosa Street",
    cuisine: "Street Food",
    address: "789 Chaat Circle",
    city: "Mumbai",
    rating: 4.5,
    menu: [
        {
            name: "Veg Samosa",
            price: 20,
            description: "Crispy and savory pastry filled with spiced potatoes and peas.",
            isVeg: true
        },
        {
            name: "Pani Puri",
            price: 30,
            description: "A popular Indian street food snack consisting of hollow, crispy balls filled with flavored water and chutneys.",
            isVeg: true
        },
        {
            name: "Chai",
            price: 16,
            description: "Traditional Indian tea infused with spices and served with milk and sugar.",
            isVeg: true
        }
    ],
    averageRating: 3.9
}

updateRestaurant("6537e73743222d8c2709937a", updatedRestaurant)