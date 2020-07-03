const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

 //global variables
dotenv.config({
    path: "./config/.env"
})

//connect db
connectDB()

//init app
const app = express()

app.get("/", (req, res) => {
    res.send("Hello from the sever!")
})


//listening to port
const PORT = `${process.env.PORT}` || 5000
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))