const mongoose = require("mongoose");

const ___Schema = new mongoose.Schema({
	photos: { type: ___, required: ___ },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("___", ___Schema);
