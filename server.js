const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoute = require("./routes/user")
const designRoute = require("./routes/designs")
const http = require('http')

dotenv.config()

const PORT = process.env.PORT || 8080;

const app =  express()

const server = http.createServer(app)

app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes
app.use("/api/users",userRoute)
app.use("/api/designs",designRoute)
app.use("/",(req,res) => {
    res.send("Home")
})


// Listener

mongoose.connect(process.env.MONGO_URL,() => {
    console.log(`connected to mongoDB`)
})

server.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`)
})