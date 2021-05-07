const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./db/index.js");

//setting up the app
const app = express();

//configuring dotenv
dotenv.config();

//importing routes
const route = require("./routes/route");

//app middlewear
app.use(express.json());
app.use(cors());
app.use("/api/route", route);

//connecting to db
connectDB();

//listening to the app
app.listen(process.env.PORT, () =>
	console.log(
		colors.yellow.bold(`🚀 Server is running on`),
		colors.yellow.underline(`http://localhost:${process.env.PORT}`)
	)
);
