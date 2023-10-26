const mongoose = require("mongoose");
const express = require("express");
require("./db")
const Restaurant = require("./models/restaurant");
const { createRestaurant, readRestaurant, readAllRestaurants, readRestaurantsByCuisine, updateRestaurant, deleteRestaurant, searchRestaurantsByLocation, filterRestaurantsByRating, addDishToMenu, removeDishFromMenu, addUserReviewAndRating, getUserReviewsForRestaurant } = require("./controllers/restaurantController");

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Foodify Restaurant API")
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})

// creating a restaurant API
app.post("/restaurants", async (req, res) => {
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

//reading a restaurant API
app.get("/restaurants/:name", async (req, res) => {
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
app.get("/restaurants", async (req, res) => {
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
app.get("/restaurants/cuisine/:cuisineType", async (req, res) => {
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
app.post("/restaurants/:restaurantId", async (req, res) => {
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