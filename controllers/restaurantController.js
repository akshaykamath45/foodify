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

// read restaurants by cuisine
async function readRestaurantsByCuisine(cuisine) {
    try {
        const restaurants = await Restaurant.find({ cuisine: cuisine })
        if (restaurants.length > 0) {
            console.log(`Restaurants with cuisine ${cuisine} `, restaurants)
        } else {
            console.log(`No restaurants with cuisine ${cuisine}`)
        }
    } catch (error) {
        console.log(`Failed to retrieve all restaurants with cuisine ${cuisine} `, error)
    }
}

// update a restaurant by ID
async function updateRestaurant(restaurantId, updatedRestaurant) {
    try {
        const restaurant = await Restaurant.findById({ _id: restaurantId })
        if (restaurant) {
            restaurant.set(updatedRestaurant)
            await restaurant.save()
            console.log("Updated restaurant ", restaurant)
        } else {
            console.log(`Cannot find restaurant to update`)
        }
    } catch (error) {
        console.log("Failed to update the restaurant ", error);
    }
}

// delete a restaurant by ID
async function deleteRestaurant(restaurantID) {
    try {
        const restaurant = await Restaurant.findOneAndDelete({ _id: restaurantID })
        if (restaurant) {
            console.log(`Deleted restaurant ${restaurant.name}`)
        } else {
            console.log('No restaurant found to delete')
        }
    } catch (error) {
        console.log("Failed to delete the restaurant ", error)
    }
}

// search restaurants by location
async function searchRestaurantsByLocation(restaurantLocation) {
    try {
        //location can be city or address
        const restaurants = await Restaurant.find({
            $or: [
                { 'city': restaurantLocation },
                { 'address': restaurantLocation }
            ]
        })

        if (restaurants.length > 0) {
            console.log(`Restaurants present at location ${restaurantLocation} `, restaurants)
        } else {
            console.log(`No restaurants found with location ${restaurantLocation}`)
        }
    } catch (error) {
        console.log("Failed to find the restaurants ", error)
    }

}

module.exports = {
    createRestaurant,
    readRestaurant,
    readAllRestaurants,
    readRestaurantsByCuisine,
    updateRestaurant,
    deleteRestaurant,
    searchRestaurantsByLocation
};





