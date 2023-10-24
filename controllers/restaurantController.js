const mongoose = require("mongoose")
const Restaurant = require("../models/restaurant")

// create a restaurant
async function createRestaurant(restaurant) {
    try {
        const newRestaurant = new Restaurant(restaurant)
        const saveRestaurant = await newRestaurant.save();
        if (saveRestaurant) {
            console.log("New restaurant added ", saveRestaurant)
        } else {
            console.log("New restaurant not created")
        }
    } catch (error) {
        console.log("Failed to add new restaurant ", error)
    }
}

// read a restaurant
async function readRestaurant(restaurantName) {
    try {
        const restaurant = await Restaurant.findOne({ name: restaurantName })
        if (restaurant) {
            console.log("Restaurant found ", restaurant)
        } else {
            console.log(`No restaurant found with name ${restaurantName}`)
        }
    } catch (error) {
        console.log(`Failed to retrieve restaurant ${restaurantName} `, error)
    }
}

// read all restaurants
async function readAllRestaurants() {
    try {
        const restaurants = await Restaurant.find()
        if (restaurants) {
            console.log("All restaurants ", restaurants)
        } else {
            console.log("No restaurants found")
        }
    } catch (error) {
        console.log("Failed to retrieve all restaurants ", error)
    }
}


module.exports = {
    createRestaurant,
    readRestaurant,
    readAllRestaurants
};


