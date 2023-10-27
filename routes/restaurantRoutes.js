const express = require("express");
const restaurantRouter = express.Router();

const Restaurant = require("../models/restaurant");
const {
    createRestaurant,
    readRestaurant,
    readAllRestaurants,
    readRestaurantsByCuisine,
    updateRestaurant,
    deleteRestaurant,
    searchRestaurantsByLocation,
    filterRestaurantsByRating,
    addDishToMenu,
    removeDishFromMenu,
    addUserReviewAndRating,
    getUserReviewsForRestaurant,
} = require("../controllers/restaurantController");


// creating a restaurant API
restaurantRouter.post("/", async (req, res) => {
    try {
        const restaurant = await createRestaurant(req.body);
        if (restaurant) {
            res.json({ message: "Restaurant added successfully", restaurant: restaurant })
        } else {
            res.status(401).json({ error: "Cannot add restaurant" })
        }
    } catch (error) {
        res.json.status(500).json({ error: "Failed to add restaurant" })
    }
})

// searching for restaurants by location
restaurantRouter.get("/search", async (req, res) => {
    const { location } = req.query
    console.log(location)
    try {
        const restaurant = await searchRestaurantsByLocation(location)
        if (restaurant) {
            res.json({ message: `Restaurants found in ${location}`, restaurant: restaurant })
        } else {
            res.status(404).json({ error: `No restaurants found in location ${location}` })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to search restaurants" })
    }
})

// adding a dish to restaurant's menu
restaurantRouter.post("/:restaurantId/menu", async (req, res) => {
    const { restaurantId } = req.params;
    const { dishToAdd } = req.body
    try {
        const restaurant = await addDishToMenu(restaurantId, dishToAdd);
        if (restaurant) {
            res.json({ message: `Dish ${dishToAdd.name} added succesfully to the restaurant ${restaurant.name} `, restaurant: restaurant })
        } else {
            res.status(404).json({ error: "No restaurant found to add dish" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to add dish to the restaurant" })
    }

})

// removing a dish from restaurant's menu
restaurantRouter.delete("/:restaurantId/menu/:dishName", async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const { dishName } = req.params;
        const restaurant = await removeDishFromMenu(restaurantId, dishName)
        if (restaurant) {
            res.json({ message: `Removed dish ${dishName} from the restaurant ${restaurant.name} successfully `, restaurant: restaurant })
        } else {
            res.status(404).json({ error: "No dish present or wrong restaurant" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete the dish from restaurnat's menu" })
    }
})

// allowing users to add reviews and rating for restaurant
restaurantRouter.post("/:restaurantId/reviews", async (req, res) => {

    const { restaurantId } = req.params
    const { userId, rating, reviewText } = req.body
    try {
        const restaurant = await addUserReviewAndRating(userId, restaurantId, reviewText, rating)
        if (restaurant) {
            res.json({ message: `Successfully added review to the restaurant ${restaurant.name} `, restaurant: restaurant })
        } else {
            res.status(404).json({ error: "Cannot add review to the restaurant,Please check userId and restaurantId" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to add user review and rating to the restaurant" })
    }
})

// retrieving user reviews for a specific restaurant
restaurantRouter.get("/:restaurantId/reviews", async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const restaurant = await getUserReviewsForRestaurant(restaurantId)
        if (restaurant.reviews.length === 0) {
            res.status(404).json({ error: `No reviews found for the restaurant` })
        }
        else if (restaurant) {
            res.json({ message: `User reviews for restaurant ${restaurant.name}`, reviews: restaurant.reviews })
        } else {
            res.status(404).json({ error: `Restaurant not found` })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user reviews for the restaurant " })
    }
})

//reading a restaurant API
restaurantRouter.get("/:name", async (req, res) => {
    try {
        const restaurant = await readRestaurant(req.params.name);
        if (restaurant) {
            res.json({ message: "Restaurant found", restaurant: restaurant })
        } else {
            res.status(401).json({ error: `No restaurant found with name ${req.params.name}` })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to read restaurant" })
    }
})

//reading all restaurants API
restaurantRouter.get("/", async (req, res) => {
    try {
        const restaurants = await readAllRestaurants()
        if (restaurants) {
            res.json({ message: "All restaurants fetched successfully", restaurants: restaurants })
        } else {
            res.status(401).json({ error: "Cannot fetch restaurants" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch restaurants" })
    }
})

//reading restaurants by cuisine API
restaurantRouter.get("/cuisine/:cuisineType", async (req, res) => {
    const cuisine = req.params.cuisineType
    try {
        const restaurants = await readRestaurantsByCuisine(req.params.cuisineType);
        if (restaurants) {
            res.json({ message: `All restaurants with ${cuisine} cuisine fetched successfully`, restaurants: restaurants })
        } else {
            res.status(401).json({ error: `No restaurants found with ${cuisine} cuisine ` })
        }
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch restaurants with cuisine ${cuisine}` })
    }
})


//updating a restaurant API
restaurantRouter.post("/:restaurantId", async (req, res) => {
    try {
        const restaurant = await updateRestaurant(req.params.restaurantId, req.body)
        if (restaurant) {
            res.json({ message: "Restaurant updated successfully", restaurant: restaurant })
        } else {
            res.status(404).json({ error: "No restaurant found to update " })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update the restaurant" })
    }
})

//deleting a restaurant API
restaurantRouter.delete("/:restaurantId", async (req, res) => {
    try {
        const restaurant = await deleteRestaurant(req.params.restaurantId)
        if (restaurant) {
            res.json({ message: "Restaurant deleted successfully", restaurant: restaurant })
        } else {
            res.status(404).json({ error: "No restaurant found to delete" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete the restaurant" })
    }
})

module.exports = restaurantRouter