const express = require("express");
const minimumRatingRouter = express.Router();

const Restaurant = require("../models/restaurant");

const {
    filterRestaurantsByRating,
} = require("../controllers/restaurantController");



// filtering restaurants by rating
minimumRatingRouter.get("/rating/:minRating", async (req, res) => {
    const { minRating } = req.params
    try {
        const restaurants = await filterRestaurantsByRating(minRating)
        if (restaurants) {
            res.json({ message: `Restaurants with minimum rating ${minRating}`, restaurants: restaurants })
        } else {
            res.status(404).json({ error: `No restaurants found with minimum rating ${minRating}` })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to filter restaurants" })
    }
})




module.exports = minimumRatingRouter