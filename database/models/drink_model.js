const mongoose = require("mongoose");
const DrinkSchema = require("./../schema/drink_schema");

const DrinkModel = mongoose.model("drink", DrinkSchema);

module.exports = DrinkModel;