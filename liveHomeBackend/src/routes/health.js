const express = require('express')

function healthApp (app) {
  const router = express.Router()
  app.use('/api/health', router)

  router.get('/', function (req, res, next) {
    res.status(200).json({ status: 'UP' })
  })
}

module.exports = healthApp
