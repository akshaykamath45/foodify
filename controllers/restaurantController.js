const mongoose = require("mongoose")
const Restaurant = require("../models/restaurant")

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


module.exports = {
    createRestaurant
};