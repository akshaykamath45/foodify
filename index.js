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