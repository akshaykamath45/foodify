const mongoose = require("mongoose")
const User = require("./user")

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
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: String,
            rating: Number
        }
    ]

})

module.exports = mongoose.model("Restaurant", restaurantSchema)