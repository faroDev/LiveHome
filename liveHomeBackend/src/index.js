'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./../config')

// Middleware
const notFoundHandler = require('./utils/middleware/notFoundHandler')
const { errorHandler, logError, wrapError } = require('./utils/middleware/errorHandler')

// Routes
const healthApp = require('./routes/health')
const usersTypeApi = require('./routes/usersType')
const authApi = require('./routes/auth')
const userApi = require('./routes/user')
const propertyTypeApi = require('./routes/propertyType')
const propertyApi = require('./routes/property')
const fileApi = require('./routes/file')
const viewApi = require('./routes/views')
const modalityTypeApi = require('./routes/modalityType')
const propertyDetailApi = require('./routes/propertyDetail')
const favoriteApi = require('./routes/favorite')
const modalityApi = require('./routes/modality')
const approveUserApi = require('./routes/approveUser')

const app = express()

// Body Parse
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
healthApp(app)
usersTypeApi(app)
authApi(app)
userApi(app)
propertyTypeApi(app)
propertyApi(app)
fileApi(app)
viewApi(app)
modalityTypeApi(app)
propertyDetailApi(app)
favoriteApi(app)
modalityApi(app)
approveUserApi(app)

// Error handler
app.use(logError)
app.use(wrapError)
app.use(errorHandler)

// Not found middleware
app.use(notFoundHandler)

app.listen(config.app.port, function () {
  console.log(`The server is listening in the port ${config.app.port}`)
})
