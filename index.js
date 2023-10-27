const mongoose = require("mongoose");
const express = require("express");
require("./db")


const restaurantRoutes = require("./routes/restaurantRoutes");
const minimumRatingRoute = require("./routes/minimumRatingRoute");

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Foodify Restaurant API")
})

app.use("/restaurants", restaurantRoutes);
app.use("/restaurant", minimumRatingRoute);

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})

