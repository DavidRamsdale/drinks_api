const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    name: {
        type: String,
        required = true
    },
    location: {
        type: String,
        required = true
    },
    rating: {
        type: Number,
        required = true
    }
});

module.exports = DrinkSchema;