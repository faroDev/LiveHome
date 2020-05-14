'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./../config')

// Middleware
const notFoundHandler = require('./utils/middleware/notFoundHandler')

// Routes
const healthApp = require('./routes/health')
const usersTypeApi = require('./routes/usersType')
const authApi = require('./routes/auth')
const userApi = require('./routes/user')
const propertyTypeApi = require('./routes/propertyType')

const app = express()

// Body Parse
app.use(bodyParser.json())

// Routes
healthApp(app)
usersTypeApi(app)
authApi(app)
userApi(app)
propertyTypeApi(app)

// Not found middleware
app.use(notFoundHandler)

app.listen(config.app.port, function () {
  console.log(`The server is listening in the port ${config.app.port}`)
})
