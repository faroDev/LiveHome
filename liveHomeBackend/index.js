'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const db = require('./store')

// Middleware
const notFoundHandler = require('./src/utils/middleware/notFoundHandler')
const { errorHandler, logError, wrapError } = require('./src/utils/middleware/errorHandler')

// Routes
const healthApp = require('./src/routes/health')
const usersTypeApi = require('./src/routes/usersType')
const authApi = require('./src/routes/auth')
const userApi = require('./src/routes/user')
const propertyTypeApi = require('./src/routes/propertyType')
const propertyApi = require('./src/routes/property')
const fileApi = require('./src/routes/file')
const viewApi = require('./src/routes/views')
const modalityTypeApi = require('./src/routes/modalityType')
const propertyDetailApi = require('./src/routes/propertyDetail')
const favoriteApi = require('./src/routes/favorite')
const modalityApi = require('./src/routes/modality')
const approveUserApi = require('./src/routes/approveUser')
const statusApi = require('./src/routes/status')
let services

const corsOptions = {
  origin: '*'
}

const app = express()

// Cors
app.use(cors(corsOptions))

// Body Parse
app.use(bodyParser.json())

app.use('*', async (req, res, next) => {
  if (!services) {
    console.log('Connecting to database')

    try {
      services = await db(config.db)

    } catch (e) {
      return next(e)
    }
  }
  next()
})

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
statusApi(app)

// Error handler
app.use(logError)
app.use(wrapError)
app.use(errorHandler)

// Not found middleware
app.use(notFoundHandler)

app.listen(config.app.port, function () {
  console.log(`The server is listening in the port ${config.app.port}`)
})
