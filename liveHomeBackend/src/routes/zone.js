'use strict'
const express = require('express')
const ZoneService = require('../services/zone')
const passport = require('passport')
const validationHandler = require('../utils/middleware/validationHandler')
const { zoneUpdateSchema, zoneCreateSchema, zoneIdSchema } = require('../utils/schemas/zone')

// jwt strategy
require('../utils/auth/strategies/jwt')

function zoneApi (app) {
  const router = express()
  const zoneService = new ZoneService()

  app.use('/api/zones', router)

  router.get('/',
    async function (req, res, next) {
      try {
        const result = await zoneService.get()
        res.status(200).json({
          data: result || [],
          message: 'Zones listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: zoneIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const result = await zoneService.getById(id)

        res.status(200).json({
          data: result || {},
          message: 'Zone retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: zoneIdSchema }, 'params'),
    validationHandler(zoneUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: zone } = req

        const result = await zoneService.update(id, zone)

        res.status(200).json({
          data: result,
          message: 'Zone updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(zoneCreateSchema),
    async function (req, res, next) {
      try {
        const { body: zone } = req
        const result = await zoneService.create(zone)

        res.status(201).json({
          data: result,
          message: 'Zone created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = zoneApi
