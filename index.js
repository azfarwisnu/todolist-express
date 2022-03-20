const express = require("express");
const cors = require("cors")
const bearerToken = require("express-bearer-token");

const app = express()
const port = process.env.PORT || 3300

app.use(cors())
app.use(express.json())
app.use(bearerToken())

app.get("/", (req,res) => {
    res.status(200).send("hello word")
})

const { userRouters} = require('./routers')

app.use("/users", userRouters)

app.listen(port, () => console.log("this server running on port", port))