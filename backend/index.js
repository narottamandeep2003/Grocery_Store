require('dotenv').config()
const mongoose = require("mongoose")
const cors = require("cors")
const { dbConfig } = require("./db/db.js")
const { router } = require("./routers/router.js")

const express = require("express")

const app = express();


// Cors
var corsOptions = {
    origin: process.env.ORIGIN,
}
app.use(cors(corsOptions))

// Port 
const PORT = process.env.PORT || 4000

// app
app.use(express.json())
app.use("/api", router)


// db configuration
dbConfig().then(async () => {
    console.log("db configuration")
    app.listen(PORT, () => console.log("server start"));
    mongoose.connection.on("connected", () => {
        console.log("Connect");
    });
}).catch((err) => {
    console.log("error occurred: ")
});