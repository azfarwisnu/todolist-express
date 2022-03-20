const express = require("express")
const { userControllers } = require("../controllers")
const { auth } = require('../helper/authToken')
const routers = express.Router()

routers.get('/get', userControllers.getData)
routers.post('/regis', userControllers.addData)
routers.patch('/edit', userControllers.editData)
routers.patch('/verified', auth, userControllers.verification)

module.exports = routers