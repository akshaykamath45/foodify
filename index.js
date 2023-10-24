const mongoose = require("mongoose")
require("./db")
const Restaurant = require("./models/restaurant");

const mongoose = require("mongoose")
require("./db")
const Restaurant = require("./models/restaurant");
const { createRestaurant } = require("./controllers/restaurantController");


createRestaurant({
    name: "McDonalds",
    cuisine: "American",
    address: "123 Fake Street",
    city: "New York",
    rating: 4,
    menu: [
        {
            name: "Big Mac",
            price: 5.99,
            description: "A Big Mac is a hamburger sandwich consisting of one or more hamburger patties, sauce, lettuce, cheese, pickles, and onions, served in a slice of bread rolled up in buns.",
            isVeg: false
        },
        {
            name: "McChicken",
            price: 3.99,
            description: "McChicken is a hamburger sandwich consisting of one or more hamburger patties, sauce, lettuce, cheese, pickles, and onions, served in a slice of bread rolled up in buns.",
            isVeg: false
        }],
    averageRating: 4.3
})

createRestaurant({
    name: "Spice Haven",
    cuisine: "Indian",
    address: "456 Masala Lane",
    city: "Mumbai",
    rating: 3.9,
    menu: [
        {
            name: "Biryani",
            price: 280,
            description: "A fragrant and flavorful rice dish cooked with aromatic spices and tender meat or vegetables.",
            isVeg: false
        },
        {
            name: "Paneer Tikka",
            price: 230,
            description: "Tandoori-grilled paneer cubes marinated in a blend of spices and yogurt.",
            isVeg: true
        },
        {
            name: "Butter Naan",
            price: 40,
            description: "Soft and buttery Indian bread baked in a tandoor oven.",
            isVeg: true
        }
    ],
    averageRating: 3.7
});

createRestaurant({
    name: "Samosa Street",
    cuisine: "Street Food",
    address: "789 Chaat Circle",
    city: "Bangalore",
    rating: 4.3,
    menu: [
        {
            name: "Veg Samosa",
            price: 20,
            description: "Crispy and savory pastry filled with spiced potatoes and peas.",
            isVeg: true
        },
        {
            name: "Pani Puri",
            price: 30,
            description: "A popular Indian street food snack consisting of hollow, crispy balls filled with flavored water and chutneys.",
            isVeg: true
        },
        {
            name: "Chai",
            price: 16,
            description: "Traditional Indian tea infused with spices and served with milk and sugar.",
            isVeg: true
        }
    ],
    averageRating: 3.8
});

createRestaurant({
    name: "Curry House",
    cuisine: "Indian",
    address: "567 Curry Avenue",
    city: "Chennai",
    rating: 4.2,
    menu: [
        {
            name: "Chicken Curry",
            price: 240,
            description: "A flavorful and spicy chicken curry made with a blend of aromatic spices.",
            isVeg: false
        },
        {
            name: "Aloo Gobi",
            price: 190,
            description: "A classic Indian dish with potatoes and cauliflower cooked in a spiced tomato gravy.",
            isVeg: true
        },
        {
            name: "Naan",
            price: 50,
            description: "A leavened, oven-baked flatbread, perfect for scooping up delicious curries.",
            isVeg: true
        }
    ],
    averageRating: 3.9
});

createRestaurant({
    name: "Coastal Delights",
    cuisine: "South Indian",
    address: "101 Idli Street",
    city: "Hyderabad",
    rating: 4.9,
    menu: [
        {
            name: "Hyderabadi Biryani",
            price: 270,
            description: "A spicy and aromatic rice dish with marinated meat or vegetables, flavored with herbs and spices.",
            isVeg: false
        },
        {
            name: "Dosa",
            price: 80,
            description: "A thin, crispy, and savory South Indian pancake served with various chutneys.",
            isVeg: true
        },
        {
            name: "Fish Curry",
            price: 250,
            description: "A tangy and spicy fish curry with a South Indian twist.",
            isVeg: false
        }
    ],
    averageRating: 4.5
});
