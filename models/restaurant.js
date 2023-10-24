const mongoose = require("mongoose")
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cuisine: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    menu: [
        {
            name: String,
            price: Number,
            description: String,
            isVeg: Boolean
        }
    ],
    averageRating: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model("Restaurant", restaurantSchema)