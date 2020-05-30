const express = require('express')

function healthApp (app) {
  const router = express.Router()
  app.use('/', router)

  router.get('/', function (req, res, next) {
    res.status(200).json({
      status: 'UP',
      application: 'Live Home API',
      version: 'v1.0.0'
    })
  })
}

module.exports = healthApp
